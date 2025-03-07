import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
      const { searchParams } = new URL(req.url);
      const userId = searchParams.get("userId");
      const week = parseInt(searchParams.get("week") || "1");
      const day = parseInt(searchParams.get("day") || "1");
  
      if (!userId) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
      }
  
      const task = await prisma.dailyTask.findFirst({
        where: { userId, week, day },
      });
  
      if (!task) {
        return NextResponse.json({ error: "No task found for the given day" }, { status: 404 });
      }
  
      return NextResponse.json(task);
    } catch (error) {
      console.error("Error fetching task:", error);
      return NextResponse.json({ error: "Failed to retrieve task" }, { status: 500 });
    }
  }
  