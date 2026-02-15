import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { title: "asc" },
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.error("COURSE FETCH ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}
