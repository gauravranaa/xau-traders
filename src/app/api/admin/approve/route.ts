import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const userId = formData.get("userId") as string;
  const batch = formData.get("batch") as string;

  if (!userId || !batch) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  const now = new Date();
  const expiresAt = new Date();
  expiresAt.setFullYear(now.getFullYear() + 1); // 1 Year Access

  await prisma.user.update({
    where: { id: userId },
    data: {
      approved: true,
      batch,
      enrolledAt: now,
      expiresAt,
      status: "active",
    },
  });

  return NextResponse.redirect(new URL("/admin/users", req.url));
}
