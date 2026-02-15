import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    // 1️⃣ Get session
    const session = await getServerSession(authOptions);
    console.log("SESSION USER:", session?.user);
 
    // 🔍 TEMP DEBUG (remove later)
    console.log("SESSION USER:", session?.user);

    // 2️⃣ Admin check
    if (!session || session.user?.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 3️⃣ Read body
    const body = await req.json();
    const { title, url, courseId } = body;

    // 4️⃣ Validate input
    if (!title || !url || !courseId) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    // 5️⃣ Create video
    const video = await prisma.video.create({
      data: {
        title,
        url,
        courseId,
      },
    });

    // 6️⃣ Success response
    return NextResponse.json({ success: true, video });

  } catch (error) {
    console.error("VIDEO UPLOAD ERROR:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
