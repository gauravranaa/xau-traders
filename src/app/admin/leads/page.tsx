export const dynamic = "force-dynamic";
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

const ADMIN_EMAILS = ["gaurav.rana2803@gmail.com"];

export default async function LeadsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  if (!ADMIN_EMAILS.includes(session.user?.email || "")) {
    redirect("/dashboard");
  }

  let leads: any[] = [];

  try {
    leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Failed to fetch leads:", error);
  }

  return (
    <div className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-10">
          Leads Dashboard
        </h1>

        {/* EMPTY STATE */}
        {leads.length === 0 && (
          <p className="text-gray-500">No leads yet.</p>
        )}

        {/* LIST */}
        <div className="space-y-6">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm"
            >
              <div className="grid md:grid-cols-2 gap-4">

                <p><strong>Name:</strong> {lead.name}</p>
                <p><strong>Email:</strong> {lead.email}</p>

                <p><strong>Phone:</strong> {lead.phone}</p>

                <p>
                  <strong>Type:</strong>{" "}
                  <span className="capitalize text-green-600">
                    {lead.type || "general"}
                  </span>
                </p>

                <p>
                  <strong>Course ID:</strong>{" "}
                  {lead.courseId || "N/A"}
                </p>

              </div>

              <p className="text-sm text-gray-400 mt-4">
                {new Date(lead.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}