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
  <div className="min-h-screen bg-primary text-white py-24 px-6">
    <div className="max-w-5xl mx-auto">

      {/* Course Header */}
      <div className="mb-16">
        <h1 className="text-5xl font-heading font-bold mb-4">
          {course.title}
        </h1>

        <p className="text-accent text-2xl font-semibold">
          {course.price}
        </p>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-3xl">
          {course.description}
        </p>
      </div>

      {/* What You Will Learn Card */}
      <div className="bg-secondary text-pink rounded-2xl p-12 shadow-xl mb-20">
        <h2 className="text-3xl font-heading font-bold mb-8">
          What You Will Learn
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-lg">
          <p>✔ Market Structure & Price Action</p>
          <p>✔ Smart Money Concepts</p>
          <p>✔ Liquidity & Institutional Traps</p>
          <p>✔ Risk Management Framework</p>
          <p>✔ Trading Psychology Mastery</p>
          <p>✔ Real Trade Case Studies</p>
        </div>
      </div>

      {/* Enquiry Card */}
      <div className="bg-[#0F1F30] rounded-2xl p-12 shadow-2xl border border-accent/20">
        <h3 className="text-3xl font-heading font-bold mb-10 text-center">
          Enroll in This Program
        </h3>

        <EnrollForm courseType={course.type} />
      </div>

    </div>
  </div>
);
}