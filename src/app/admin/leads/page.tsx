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

  const leads = await prisma.enrollmentRequest.findMany({
    include: {
      course: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-8">
        Enrollment Requests
      </h1>

      {leads.length === 0 && (
        <p className="text-gray-400">No requests yet.</p>
      )}

      <div className="space-y-6">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="border border-gray-800 rounded-xl p-6 bg-[#121826]"
          >
            <p><strong>Name:</strong> {lead.name}</p>
            <p><strong>Email:</strong> {lead.email}</p>
            <p><strong>Phone:</strong> {lead.phone}</p>

            <p>
              <strong>Course:</strong>{" "}
              {lead.course?.title || "Unknown"}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              <span className="capitalize">{lead.status}</span>
            </p>

            <p className="text-sm text-gray-400 mt-2">
              {new Date(lead.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}