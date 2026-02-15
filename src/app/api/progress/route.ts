import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

/**
 * POST → mark video as watched
 */
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { videoId } = await req.json();

  if (!videoId) {
    return NextResponse.json(
      { error: "Missing videoId" },
      { status: 400 }
    );
  }

  await prisma.videoProgress.upsert({
    where: {
      userId_videoId: {
        userId: session.user.id,
        videoId,
      },
    },
    update: { watched: true },
    create: {
      userId: session.user.id,
      videoId,
      watched: true,
    },
  });

  return NextResponse.json({ success: true });
}

/**
 * GET → dashboard progress summary
 */
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const progress = await prisma.videoProgress.findMany({
    where: { userId: session.user.id },
    include: {
      video: {
        include: { course: true },
      },
    },
  });

  return NextResponse.json(progress);
}