import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const courseId = formData.get("courseId") as string;

  if (!courseId) {
    return NextResponse.json({ error: "Missing courseId" }, { status: 400 });
  }

  const exists = await prisma.courseEnrollment.findFirst({
    where: {
      userId: session.user.id,
      courseId,
    },
  });

  if (!exists) {
    await prisma.courseEnrollment.create({
      data: {
        userId: session.user.id,
        courseId,
      },
    });
  }

  return NextResponse.redirect(
    new URL(`/courses/${courseId}`, req.url)
  );
}
