import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const course = (formData.get("course") as string)?.trim();
    const type = (formData.get("type") as string)?.trim(); // batch type

    // =============================
    // VALIDATIONS
    // =============================

    if (!name || !email || !phone || !type) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Name: Only alphabets and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return NextResponse.json(
        { error: "Name must contain only alphabets" },
        { status: 400 }
      );
    }

    // Email: Valid format
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Phone: 10–15 digits only
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "Phone number must be 10–15 digits" },
        { status: 400 }
      );
    }

    // Batch type: Only alphabets
    const typeRegex = /^[A-Za-z\s]+$/;
    if (!typeRegex.test(type)) {
      return NextResponse.json(
        { error: "Batch type must contain only characters" },
        { status: 400 }
      );
    }

    // =============================
    // SAVE TO DATABASE
    // =============================

    await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        course,
        type,
      },
    });

    return NextResponse.redirect(new URL("/thank-you", req.url));

  } catch (error) {
    console.error("LEAD ERROR:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}