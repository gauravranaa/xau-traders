import prisma from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    orderBy: { createdAt: "desc" },
  });

  const onlineCourses = courses.filter(
    (course) => course.type === "online"
  );

  const offlineCourses = courses.filter(
    (course) => course.type === "offline"
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      {/* ===== HERO / DIRECTIVE SECTION ===== */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Master Trading with Structure
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Choose between real-world mentorship or flexible online learning.
          Built for traders who want consistency, discipline, and profitability.
        </p>

        {/* TRUST LINE */}
        <div className="flex justify-center gap-6 mt-6 text-sm text-gray-500 flex-wrap">
          <span>✔ Live Mentorship</span>
          <span>✔ Structured System</span>
          <span>✔ Real Trade Case Studies</span>
        </div>
      </div>

      {/* ===== ONLINE COURSES ===== */}
      {onlineCourses.length > 0 && (
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-blue-500">
            Online Programs (Flexible Learning)
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {onlineCourses.map((course: any) => (
              <div
                key={course.id}
                className="border border-gray-800 rounded-xl p-6 bg-[#121826] hover:border-blue-500 transition"
              >
                <h3 className="text-xl font-bold">
                  {course.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {course.description
                    ? course.description.slice(0, 120) + "..."
                    : "No description available."}
                </p>

                <p className="text-blue-500 mt-4 font-semibold text-lg">
                  {course.price}
                </p>

                {/* CTA */}
                <Link
                  href={`/courses/${course.id}`}
                  className="inline-block mt-6 bg-blue-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-blue-400 transition"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ===== OFFLINE COURSES ===== */}
      {offlineCourses.length > 0 && (
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-green-500">
            Offline Programs (Premium Mentorship)
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {offlineCourses.map((course: any) => (
              <div
                key={course.id}
                className="border border-gray-800 rounded-xl p-6 bg-[#121826] hover:border-green-500 transition"
              >
                <h3 className="text-xl font-bold">
                  {course.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {course.description
                    ? course.description.slice(0, 120) + "..."
                    : "No description available."}
                </p>

                <p className="text-green-500 mt-4 font-semibold text-lg">
                  {course.price}
                </p>

                {/* URGENCY */}
                <p className="text-sm text-green-400 mt-1">
                  Limited seats available
                </p>

                {/* CTA */}
                <Link
                  href={`/courses/${course.id}`}
                  className="inline-block mt-6 bg-green-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-400 transition"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ===== EMPTY STATE ===== */}
      {courses.length === 0 && (
        <div className="text-center text-gray-400 mt-20">
          No courses available right now.
        </div>
      )}
    </div>
  );
}