import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json([], { status: 401 });
  }

  const courses = await prisma.course.findMany({
    where: {
      enrollments: {
        some: {
          userId: session.user.id,
        },
      },
    },
  });

  return NextResponse.json(courses);
}
