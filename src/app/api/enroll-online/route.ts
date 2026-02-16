import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

   const enrollment = await prisma.onlineEnrollment.create({
  data: {
    name,
    email,
    batch: "ONLINE",
  },
});


    return NextResponse.json({ success: true, enrollment });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
