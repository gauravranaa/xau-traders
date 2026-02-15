import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

const ADMIN_EMAILS = ["gaurav.rana2803@gmail.com"];

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !ADMIN_EMAILS.includes(session.user?.email || "")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const {
      title,
      description,
      price,
      thumbnail,
      type,
      whatsapp,
    } = body;

    // ✅ Validation
    if (!title || !description || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Online must have price
    if (type === "online" && !price) {
      return NextResponse.json(
        { error: "Price is required for online course" },
        { status: 400 }
      );
    }

    // Offline must have WhatsApp
    if (type === "offline" && !whatsapp) {
      return NextResponse.json(
        { error: "WhatsApp number required for offline course" },
        { status: 400 }
      );
    }

    const course = await prisma.course.create({
      data: {
        title,
        description,
        price: type === "online" ? price : null,
        thumbnail,
        type,
        whatsapp: type === "offline" ? whatsapp : null,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.error("ADMIN COURSE ERROR:", error);
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 }
    );
  }
}
