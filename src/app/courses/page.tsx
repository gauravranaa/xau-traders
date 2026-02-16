import prisma from "@/lib/prisma";
import Link from "next/link";

type CourseType = {
  id: string;
  title: string;
  description: string;
  price: string | null;
  thumbnail: string | null;
  type: string;
  createdAt: Date;
};

export default async function CoursesPage() {
  const courses: CourseType[] = await prisma.course.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-black text-white px-10 py-20">

      <h1 className="text-4xl font-bold mb-12 text-center">
        Our Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course: CourseType) => (
          <div
            key={course.id}
            className="bg-[#121826] border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
          >
            {course.thumbnail && (
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}

            <h2 className="text-xl font-semibold mb-2">
              {course.title}
            </h2>

            <p className="text-gray-400 text-sm mb-4">
              {course.description}
            </p>

            {course.type === "online" && (
              <p className="text-green-400 font-semibold mb-4">
                {course.price}
              </p>
            )}

            <Link
              href={`/courses/${course.id}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
            >
              View Course
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}
