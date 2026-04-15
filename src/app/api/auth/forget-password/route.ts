import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    // 🔐 Security: always return success
    if (!user) {
      return NextResponse.json({
        message: "If account exists, email sent",
      });
    }

    // 🔑 Generate token
    const token = crypto.randomBytes(32).toString("hex");

    const expiry = new Date(Date.now() + 1000 * 60 * 15); // 15 mins

    // 💾 Save token
    await prisma.user.update({
      where: { email },
      data: {
        resetToken: token,
        resetTokenExpiry: expiry,
      },
    });

    // 📧 Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER!,
        pass: process.env.GMAIL_APP_PASSWORD!,
      },
    });

    const resetLink = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`;

    // 📩 Send email
    await transporter.sendMail({
      from: `"XAU Traders" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Reset Your Password",
      html: `
        <div style="font-family: Arial; line-height:1.6;">
          <h2>Password Reset Request</h2>
          <p>You requested to reset your password.</p>
          
          <p>
            <a href="${resetLink}" 
               style="background:#16a34a;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">
              Reset Password
            </a>
          </p>

          <p>Or copy this link:</p>
          <p>${resetLink}</p>

          <p>This link will expire in <strong>15 minutes</strong>.</p>

          <p>If you didn’t request this, ignore this email.</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Reset email sent",
    });

  } catch (error) {
    console.error("FORGOT PASSWORD ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}