import { NextResponse } from "next/server";
import  {db}  from "@/lib/db" // Prisma client

export async function POST(req: Request) {
  try {
    const {
      userId,
      gameId,
      gameType,
      sessionId,
      score,
      completion,
      timeSpent,
      accuracy,
      difficulty,
      streak,
      retries,
      dropOff,
      frustrationScore,
      badgesEarned,
      challengesDone,
      gameData,
    } = await req.json();

    // Validate required fields
    if (!userId || !gameId || !gameType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const progress = await db.gameProgress.create({
      data: {
        userId,
        gameId,
        gameType,
        sessionId,
        score,
        completion,
        timeSpent,
        accuracy,
        difficulty,
        streak,
        retries,
        dropOff,
        frustrationScore,
        badgesEarned,
        challengesDone,
        gameData,
      },
    });

    return NextResponse.json({ message: "Progress saved!", progress }, { status: 201 });
  } catch (error) {
    console.error("Error saving progress:", error);
    return NextResponse.json({ error: "Failed to save progress" }, { status: 500 });
  }
}


export async function GET(req: Request) {
    try {
      const { searchParams } = new URL(req.url);
      const userId = searchParams.get("userId");
      const gameType = searchParams.get("gameType"); // Optional filter
  
      if (!userId) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
      }
  
      const progress = await db.gameProgress.findMany({
        where: { userId, ...(gameType ? { gameType } : {}) },
        orderBy: { datePlayed: "desc" },
      });
  
      return NextResponse.json(progress);
    } catch (error) {
      console.error("Error fetching progress:", error);
      return NextResponse.json({ error: "Failed to retrieve progress" }, { status: 500 });
    }
  }
  