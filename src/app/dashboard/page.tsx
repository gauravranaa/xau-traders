import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // if you use custom auth config
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Unauthorized
      </div>
    );
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        User not found
      </div>
    );
  }

  // ⛔ Enrollment Pending
  if (!user.approved) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-[#121826] p-8 rounded-xl border border-gray-800 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Enrollment Pending
          </h2>
          <p className="text-gray-400">
            Your payment verification is under review.
            Access will be granted after confirmation.
          </p>
        </div>
      </div>
    );
  }

  // ⛔ Expired Access
  if (user.expiresAt && new Date() > new Date(user.expiresAt))
{
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-[#121826] p-8 rounded-xl border border-gray-800 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">
            Access Expired
          </h2>
          <p className="text-gray-400">
            Your mentorship period has ended.
            Please contact admin to renew your access.
          </p>
        </div>
      </div>
    );
  }

  // ✅ Pass clean serializable data to client
  const safeUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    batch: user.batch,
    expiresAt: user.expiresAt?.toISOString() ?? null,
  };

  return <DashboardClient user={safeUser} />;
}
