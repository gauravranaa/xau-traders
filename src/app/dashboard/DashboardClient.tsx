"use client";

import Link from "next/link";
import AccessTimer from "@/components/AccessTimer";

type UserType = {
  name?: string | null;
  batch?: string | null;
  expiresAt?: string | null;
};

export default function DashboardClient({ user }: { user: UserType }) {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold">
          Welcome {user.name || "Trader"}
        </h2>

        <p className="text-gray-400 mt-2">
          Access your enrolled trading program
        </p>

        {/* Countdown Timer */}
        {user.expiresAt && (
          <AccessTimer expiresAt={user.expiresAt} />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ================= OFFLINE BATCH ================= */}
        {user.batch === "Offline" && (
          <div className="border border-gray-800 rounded-xl overflow-hidden bg-[#121826]">

            <img
              src="/images/offline.PNG"
              alt="Offline Batch"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">
                Offline Batch
              </h3>

              <p className="text-gray-400 mt-3">
                In-person advanced mentorship program.
                Live execution, psychology training,
                real-time market exposure.
              </p>

              {/* 🔥 FIXED LINK */}
              <Link
                href="/dashboard/offline"
                className="mt-6 inline-block bg-yellow-500 text-black px-5 py-2 rounded font-semibold hover:bg-yellow-400 transition"
              >
                Enter Course
              </Link>
            </div>
          </div>
        )}

        {/* ================= ONLINE PROGRAM ================= */}
        {user.batch === "Online" && (
          <div className="border border-gray-800 rounded-xl overflow-hidden bg-[#121826]">

            <img
              src="/images/online.PNG"
              alt="Online Program"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">
                Online Program
              </h3>

              <p className="text-gray-400 mt-3">
                Structured online course with video lessons,
                risk management systems and trading psychology.
              </p>

              {/* 🔥 FIXED LINK */}
              <Link
                href="/dashboard/online"
                className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded font-semibold hover:bg-blue-500 transition"
              >
                Enter Course
              </Link>
            </div>
          </div>
        )}

      </div>

      {/* If No Batch Assigned */}
      {!user.batch && (
        <div className="mt-10 bg-[#121826] p-6 rounded-xl border border-gray-800 text-center">
          <h3 className="text-xl font-semibold">
            No Program Assigned
          </h3>
          <p className="text-gray-400 mt-2">
            Please contact admin to activate your enrollment.
          </p>
        </div>
      )}

    </div>
  );
}
