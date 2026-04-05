import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import EnrollForm from "@/components/EnrollForm";

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
    <div className="min-h-screen bg-white text-black py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {course.title}
          </h1>

          <p className="text-green-600 text-2xl font-semibold">
            {course.price}
          </p>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            {course.description}
          </p>
        </div>

        {/* ===== WHAT YOU WILL LEARN ===== */}
        <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm mb-20">
          <h2 className="text-2xl font-bold mb-8 text-green-600">
            What You Will Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
            <p>✔ Market Structure & Price Action</p>
            <p>✔ Smart Money Concepts</p>
            <p>✔ Liquidity & Institutional Traps</p>
            <p>✔ Risk Management Framework</p>
            <p>✔ Trading Psychology Mastery</p>
            <p>✔ Real Trade Case Studies</p>
          </div>
        </div>

        {/* ===== ENROLL SECTION ===== */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-10 shadow-sm">
          
          <h3 className="text-2xl font-bold mb-6 text-center">
            Enroll in This Program
          </h3>

          {/* TRUST LINE */}
          <p className="text-center text-gray-600 mb-10">
            Limited seats • Structured mentorship • Real trading system
          </p>

          <EnrollForm courseType={course.type} />
        </div>

        {/* ===== FINAL CTA (CONVERSION BOOST) ===== */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Not Ready Yet?
          </h3>

          <p className="text-gray-600 mb-6">
            Start with free resources and build your foundation first.
          </p>

          <a
            href="/resources"
            className="
              inline-block 
              border border-green-600 
              text-green-600 
              px-6 py-3 rounded-lg 
              font-semibold hover:bg-green-50 
              transition
            "
          >
            Start Learning Free →
          </a>
        </div>

      </div>
    </div>
  );
}