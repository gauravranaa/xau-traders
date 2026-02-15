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

  if (!user || !user.approved || user.batch !== "Offline") {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">
        Offline Advanced Mentorship
      </h1>

      <p className="text-gray-400 mb-10">
        Access your classroom mentorship materials.
      </p>

      <div className="space-y-6">
        <div className="bg-[#121826] p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold">
            Classroom Guidelines
          </h3>

          <a
            href="/pdfs/offline/classroom-guide.pdf"
            target="_blank"
            className="text-yellow-400 hover:underline mt-2 inline-block"
          >
            Open PDF
          </a>
        </div>
      </div>
    </div>
  );
}
