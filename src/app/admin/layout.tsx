import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { ADMIN_EMAILS } from "@/lib/admin";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (
    !session ||
    !session.user?.email ||
    !ADMIN_EMAILS.includes(session.user.email)
  ) {
    redirect("/");
  }

  return <>{children}</>;
}
