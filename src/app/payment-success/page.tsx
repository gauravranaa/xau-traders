import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

type Props = {
  searchParams: { courseId: string };
};

export default async function PaymentSuccess({ searchParams }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/auth/signin");

  const { courseId } = searchParams;

  await prisma.courseEnrollment.upsert({
    where: {
      userId_courseId: {
        userId: session.user.id,
        courseId,
      },
    },
    update: {},
    create: {
      userId: session.user.id,
      courseId,
    },
  });

  redirect(`/courses/${courseId}`);
}
