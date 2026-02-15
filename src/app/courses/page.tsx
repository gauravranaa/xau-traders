import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded p-4 shadow"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600 mt-2">
              {course.description}
            </p>

            <Link
              href={`/courses/${course.id}`}
              className="inline-block mt-4 text-blue-600 font-medium"
            >
              View Course →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
