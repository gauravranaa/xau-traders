import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // ✅ Extract phone also
    const { name, email, phone } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const enrollment = await prisma.onlineEnrollment.create({
      data: {
        name,
        email,
        phone,           // ✅ Now defined
        batch: "ONLINE",
      },
    });

    return NextResponse.json({ success: true, enrollment });
  } catch (error) {
    console.error("ONLINE ENROLL ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
