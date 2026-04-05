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
    <div className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            {course.title}
          </h1>

          <p className="text-green-600 text-xl font-semibold mt-2">
            {course.price}
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* WHAT YOU WILL LEARN */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            What you’ll learn
          </h2>

          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Market Structure & Price Action</li>
            <li>• Smart Money Concepts</li>
            <li>• Liquidity & Institutional Traps</li>
            <li>• Risk Management Framework</li>
            <li>• Trading Psychology</li>
            <li>• Real Trade Case Studies</li>
          </ul>
        </div>

        {/* ENROLL */}
        <div className="border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500 mb-4">
            Limited seats • Structured mentorship
          </p>

          <EnrollForm courseType={course.type} />
        </div>

      </div>
    </div>
  );
}