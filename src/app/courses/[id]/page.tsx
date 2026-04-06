import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import EnrollForm from "@/components/EnrollForm";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id || id.length !== 24) {
    notFound();
  }

  const course = await prisma.course.findUnique({
    where: { id },
  });

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-3xl mx-auto">

        {/* ===== BACK ===== */}
        <Link
          href="/courses"
          className="text-sm text-gray-500 hover:underline mb-6 inline-block"
        >
          ← Back to Courses
        </Link>

        {/* ===== HEADER ===== */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {course.title}
          </h1>

          <p className="text-green-600 text-xl font-semibold mt-2">
            {course.price}
          </p>

          {/* TRUST LINE */}
          <p className="text-sm text-gray-500 mt-2">
            ✔ Structured system • ✔ Risk-first approach • ✔ Real execution
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* ===== WHAT YOU WILL LEARN ===== */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold mb-4">
            What you’ll learn
          </h2>

          <ul className="space-y-2 text-gray-600 text-sm">
            <li>✔ Market Structure & Price Action</li>
            <li>✔ Smart Money Concepts</li>
            <li>✔ Liquidity & Institutional Traps</li>
            <li>✔ Risk Management Framework</li>
            <li>✔ Trading Psychology Mastery</li>
            <li>✔ Real Trade Case Studies</li>
          </ul>
        </div>

        {/* ===== WHO IS THIS FOR ===== */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold mb-4">
            Who this is for
          </h2>

          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Traders struggling with consistency</li>
            <li>• Beginners who want structured learning</li>
            <li>• Traders tired of signals & randomness</li>
          </ul>
        </div>

        {/* ===== ENROLL SECTION ===== */}
        <div className="border border-gray-200 rounded-xl p-6">

          <p className="text-sm text-gray-500 mb-2">
            Limited seats • High demand program
          </p>

          <p className="text-sm text-green-600 mb-4 font-medium">
            Start now before next batch fills
          </p>

          <EnrollForm courseType={course.type} />
        </div>

        {/* ===== FALLBACK CTA ===== */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-3">
            Not ready yet?
          </p>

          <Link
            href="/resources"
            className="text-green-600 font-medium hover:underline"
          >
            Start with free resources →
          </Link>
        </div>

      </div>
    </div>
  );
}