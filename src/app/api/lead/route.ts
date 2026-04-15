import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const courseId = body.courseId?.trim();
    const type = body.type?.trim(); // online | offline | general

    // =============================
    // VALIDATIONS
    // =============================

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Name validation
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return NextResponse.json(
        { error: "Name must contain only alphabets" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "Phone number must be 10–15 digits" },
        { status: 400 }
      );
    }

    // =============================
    // SAVE TO LEADS TABLE ✅
    // =============================

    await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        courseId: courseId || null,
        type: type || "general",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully",
    });

  } catch (error) {
    console.error("LEAD API ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}