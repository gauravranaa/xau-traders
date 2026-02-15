import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  await prisma.enrollment.create({
    data: {
      name,
      email,
      phone,
      batch: "OFFLINE",
    },
  });

  return NextResponse.redirect("http://localhost:3000");
}
