import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  // ✅ Prevent build-time crash
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe not configured" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { courseId } = await req.json();

  const course = await prisma.course.findUnique({
    where: { id: courseId },
  });

  if (!course) {
    return NextResponse.json(
      { error: "Course not found" },
      { status: 404 }
    );
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    customer_email: session.user.email!,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: course.title,
            description: course.description,
          },
          unit_amount: Number(course.price) * 100,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXTAUTH_URL}/payment-success?courseId=${course.id}`,
    cancel_url: `${process.env.NEXTAUTH_URL}/courses/${course.id}`,
  });

  return NextResponse.json({ url: checkoutSession.url });
}
