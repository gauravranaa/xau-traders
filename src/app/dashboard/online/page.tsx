import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user || !user.approved || user.batch !== "Online") {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">
        Online Trading Program
      </h1>

      <div className="space-y-6">

        <div className="bg-[#121826] p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold">
            Module 1: Market Structure
          </h3>

          <a
            href="/pdfs/online/module1.pdf"
            target="_blank"
            className="text-blue-400 hover:underline mt-2 inline-block"
          >
            Open PDF
          </a>
        </div>

        <div className="bg-[#121826] p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold">
            Risk Management Framework
          </h3>

          <a
            href="/pdfs/online/risk-management.pdf"
            target="_blank"
            className="text-blue-400 hover:underline mt-2 inline-block"
          >
            Open PDF
          </a>
        </div>

      </div>
    </div>
  );
}
