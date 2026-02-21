import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, courseId } = await req.json();

    if (!name || !email || !phone || !courseId) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    await prisma.enrollmentRequest.create({
      data: {
        name,
        email,
        phone,
        courseId,
        
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enroll error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}