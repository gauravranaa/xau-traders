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
      <h1 className="text-4xl font-bold text-center mb-16">
        Our Courses
      </h1>

      {onlineCourses.length > 0 && (
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-blue-500">
            Online Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {onlineCourses.map((course: any) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="border border-gray-800 rounded-xl p-6 bg-[#121826] hover:border-blue-500 transition block"
              >
                <h3 className="text-xl font-bold">{course.title}</h3>
                <p className="text-gray-400 mt-3">
                  {course.description
                    ? course.description.slice(0, 120) + "..."
                    : "No description available."}
                </p>
                <p className="text-blue-500 mt-4 font-semibold">
                  {course.price}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {offlineCourses.length > 0 && (
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-green-500">
            Offline Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {offlineCourses.map((course: any) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="border border-gray-800 rounded-xl p-6 bg-[#121826] hover:border-green-500 transition block"
              >
                <h3 className="text-xl font-bold">{course.title}</h3>
                <p className="text-gray-400 mt-3">
                  {course.description
                    ? course.description.slice(0, 120) + "..."
                    : "No description available."}
                </p>
                <p className="text-green-500 mt-4 font-semibold">
                  {course.price}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {courses.length === 0 && (
        <div className="text-center text-gray-400 mt-20">
          No courses available right now.
        </div>
      )}
    </div>
  );
}
