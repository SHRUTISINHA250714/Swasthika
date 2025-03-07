import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { taskPlans } from "@/lib/constants/taskPlans"; // Import the task plan structure

export async function POST(req: Request) {
  try {
    const { userId, disorder, severity } = await req.json();

    if (!userId || !disorder || !severity) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!taskPlans[disorder]) {
      return NextResponse.json({ error: "Unsupported disorder type" }, { status: 400 });
    }

    if (!["mild", "moderate", "severe"].includes(severity)) {
      return NextResponse.json({ error: "Invalid severity level" }, { status: 400 });
    }

    const plan = taskPlans[disorder][severity as "mild" | "moderate" | "severe"];

    const tasks = [];

    for (let week = 0; week < plan.length; week++) {
      for (let day = 0; day < plan[week].length; day++) {
        tasks.push({
          userId,
          disorder,
          severity,
          week: week + 1,
          day: day + 1,
          task: plan[week][day],
          status: "pending",
        });
      }
    }

    await prisma.dailyTask.createMany({ data: tasks });

    return NextResponse.json({ message: "Tasks assigned successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error assigning tasks:", error);
    return NextResponse.json({ error: "Failed to assign tasks" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
    try {
      const { userId, week, day, status } = await req.json();
  
      if (!userId || !week || !day || !status) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
  
      await prisma.dailyTask.updateMany({
        where: { userId, week, day },
        data: { status },
      });
  
      return NextResponse.json({ message: "Task updated successfully!" });
    } catch (error) {
      console.error("Error updating task:", error);
      return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
    }
  }
  