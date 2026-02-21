import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const courseId = (formData.get("courseId") as string)?.trim();
    const type = (formData.get("type") as string)?.trim(); // online | offline

    // =============================
    // VALIDATIONS
    // =============================

    if (!name || !email || !phone || !courseId || !type) {
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

    // Type validation (online/offline)
    if (!["online", "offline"].includes(type.toLowerCase())) {
      return NextResponse.json(
        { error: "Invalid batch type" },
        { status: 400 }
      );
    }

    // =============================
    // SAVE TO DATABASE
    // =============================

    await prisma.enrollmentRequest.create({
      data: {
        name,
        email,
        phone,
        courseId,
        status: "pending",
      },
    });

    return NextResponse.redirect(new URL("/thank-you", req.url));

  } catch (error) {
    console.error("ENROLLMENT REQUEST ERROR:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}