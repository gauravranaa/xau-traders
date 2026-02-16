import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    // ✅ Safe checks (strict mode compatible)
    if (!session || !session.user || session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { title, imageUrl, issuedBy } = await req.json();

    if (!title || !imageUrl || !issuedBy) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const certificate = await prisma.certificate.create({
      data: {
        title,
        imageUrl,
        issuedBy,
      },
    });

    return NextResponse.json({ success: true, certificate });

  } catch (error) {
    console.error("CERTIFICATE UPLOAD ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
