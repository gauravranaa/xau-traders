import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
const courseId = formData.get("courseId") as string;
  await prisma.enrollmentRequest.create({
    data: {
      name,
      email,
      phone,
      courseId,
    },
  });

  return NextResponse.json({ success: true });
}