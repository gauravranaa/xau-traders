import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    await prisma.offlineEnrollment.create({
      data: {
        name,
        email,
        phone,
        batch: "OFFLINE",
      },
    });

    return NextResponse.redirect(new URL("/", req.url));
  } catch (error) {
    console.error("Offline enrollment error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
