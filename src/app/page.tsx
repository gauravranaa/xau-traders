import Link from "next/link";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic"; // prevents static build errors

async function getCourses() {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: "desc" },
    });
    return courses;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

export default async function HomePage() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="px-6 py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Master Trading With
          <span className="text-blue-500"> Structure & Discipline</span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Learn real trading concepts, psychology, and risk management
          with structured courses — no fake signals, no noise.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/resources"
            className="px-8 py-4 bg-blue-600 text-white rounded text-lg hover:bg-blue-700 transition font-semibold"
          >
            Start Learning Free
          </Link>

          <Link
            href="/dashboard"
            className="px-8 py-4 border border-gray-700 rounded text-lg hover:bg-gray-900 transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section id="courses" className="px-10 py-24">
        <h3 className="text-3xl font-bold mb-10">Featured Programs</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border border-gray-800 rounded-xl p-6 bg-[#121826]"
            >
              <h4 className="text-2xl font-bold">{course.title}</h4>
              <p className="text-gray-400 mt-3">{course.description}</p>
              <p className="text-blue-500 mt-4 font-semibold">
                {course.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} TradingEdu</p>
      </footer>
    </main>
  );
}


