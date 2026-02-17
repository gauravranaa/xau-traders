import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
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



  return NextResponse.redirect(new URL("/", request.url));

}
