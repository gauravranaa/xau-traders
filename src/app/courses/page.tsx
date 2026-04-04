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
    <div className="min-h-screen bg-white text-black px-6 py-20">

      {/* ===== HERO / DIRECTIVE SECTION ===== */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Master Trading with Structure
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
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
          <h2 className="text-2xl font-semibold mb-8 text-green-600">
            Online Programs (Flexible Learning)
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {onlineCourses.map((course: any) => (
              <div
                key={course.id}
                className="
                  bg-white border border-gray-200 rounded-xl p-6 
                  shadow-sm hover:shadow-md hover:border-green-500 
                  transition
                "
              >
                <h3 className="text-xl font-bold">
                  {course.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {course.description
                    ? course.description.slice(0, 120) + "..."
                    : "No description available."}
                </p>

                <p className="text-green-600 mt-4 font-semibold text-lg">
                  {course.price}
                </p>

                {/* CTA */}
                <Link
                  href={`/courses/${course.id}`}
                  className="
                    inline-block mt-6 
                    bg-green-600 text-white 
                    px-6 py-2 rounded-lg 
                    font-semibold hover:bg-green-700 
                    transition
                  "
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
          <h2 className="text-2xl font-semibold mb-8 text-green-700">
            Offline Programs (Premium Mentorship)
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {offlineCourses.map((course: any) => (
              <div
                key={course.id}
                className="
                  bg-white border border-gray-200 rounded-xl p-6 
                  shadow-sm hover:shadow-md hover:border-green-600 
                  transition
                "
              >
                <h3 className="text-xl font-bold">
                  {course.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {course.description
                    ? course.description.slice(0, 120) + "..."
                    : "No description available."}
                </p>

                <p className="text-green-700 mt-4 font-semibold text-lg">
                  {course.price}
                </p>

                {/* URGENCY */}
                <p className="text-sm text-green-600 mt-1 font-medium">
                  Limited seats available
                </p>

                {/* CTA */}
                <Link
                  href={`/courses/${course.id}`}
                  className="
                    inline-block mt-6 
                    bg-green-600 text-white 
                    px-6 py-2 rounded-lg 
                    font-semibold hover:bg-green-700 
                    transition
                  "
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
        <div className="text-center text-gray-500 mt-20">
          No courses available right now.
        </div>
      )}

      {/* ===== FINAL CTA (HIGH CONVERSION) ===== */}
      <div className="mt-24 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Not Sure Where to Start?
        </h3>

        <p className="text-gray-600 mb-6">
          Begin with free resources and build your foundation first.
        </p>

        <Link
          href="/resources"
          className="
            inline-block 
            border border-green-600 
            text-green-600 
            px-8 py-4 rounded-lg 
            font-semibold hover:bg-green-50 
            transition
          "
        >
          Start Learning Free →
        </Link>
      </div>

    </div>
  );
}