import prisma from "@/lib/prisma";
import { User } from "@prisma/client"; // ✅ import type

export default async function AdminUsersPage() {
  const users: User[] = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-3xl font-bold mb-10">
        Manage Students
      </h1>

      <div className="space-y-6">
        {users.map((user: User) => (   {/* ✅ typed here */}
          <div
            key={user.id}
            className="bg-[#121826] p-6 rounded-xl border border-gray-800"
          >
            <p><strong>Email:</strong> {user.email}</p>

            <p>
              <strong>Status:</strong>{" "}
              {user.approved ? "Active ✅" : "Pending ⏳"}
            </p>

            <p>
              <strong>Batch:</strong> {user.batch || "Not Assigned"}
            </p>

            {!user.approved && (
              <form action="/api/admin/approve" method="POST" className="mt-4">
                <input type="hidden" name="userId" value={user.id} />

                <select
                  name="batch"
                  required
                  className="p-2 bg-black border border-gray-700 rounded mr-3"
                >
                  <option value="">Select Batch</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>

                <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
                  Approve
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
