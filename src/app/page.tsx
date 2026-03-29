import Link from "next/link";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

async function getData() {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: "desc" },
    });

    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      take: 3, // 👈 only latest 3 blogs
    });

    return { courses, blogs };
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return { courses: [], blogs: [] };
  }
}

export default async function HomePage() {
  const { courses, blogs } = await getData();

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
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
            className="px-8 py-4 bg-blue-600 rounded text-lg hover:bg-blue-700 transition font-semibold"
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

      {/* COURSES */}
{/* COURSES */}
<section id="courses" className="px-10 py-24">
  <h3 className="text-3xl font-bold mb-10">
    Featured Programs
  </h3>

  {courses.length === 0 ? (
    <p className="text-gray-400">
      No courses available.
    </p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {courses.map((course: any) => (
        <Link
          key={course.id}
          href={`/courses/${course.id}`}  // ✅ dynamic route
          className="border border-gray-800 rounded-xl p-6 bg-[#121826] block hover:border-blue-500 transition"
        >
          <h4 className="text-2xl font-bold">
            {course.title}
          </h4>

          <p className="text-gray-400 mt-3">
            {course.description
              ? course.description.slice(0, 120) + "..."
              : "No description"}
          </p>

          <p className="text-blue-500 mt-4 font-semibold">
            {course.price}
          </p>
        </Link>
      ))}
    </div>
  )}
</section>


      {/* BLOGS */}
 <section className="px-6 md:px-10 pb-24">

  {/* ===== Featured Learning Material ===== */}
  <div className="mb-20">
    <div className="flex justify-between items-center mb-10">
      <h3 className="text-3xl font-bold">Featured Learning Material</h3>
      <Link
        href="/resources"
        className="text-blue-500 hover:underline"
      >
        View All →
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <Link
        href="/resources/risk-management-blueprint"
        className="border border-gray-800 rounded-xl p-6 bg-[#121826] block hover:border-blue-500 transition"
      >
        <h4 className="text-xl font-bold">
          Risk Management Blueprint
        </h4>
        <p className="text-gray-400 mt-3">
          Learn how professional traders protect capital and scale safely.
        </p>
      </Link>

      <Link
        href="/resources/professional-trading-plan"
        className="border border-gray-800 rounded-xl p-6 bg-[#121826] block hover:border-blue-500 transition"
      >
        <h4 className="text-xl font-bold">
          Build a Professional Trading Plan
        </h4>
        <p className="text-gray-400 mt-3">
          Create a structured system before risking real money.
        </p>
      </Link>

      <Link
        href="/resources/psychology-discipline-mastery"
        className="border border-gray-800 rounded-xl p-6 bg-[#121826] block hover:border-blue-500 transition"
      >
        <h4 className="text-xl font-bold">
          Psychology & Discipline Mastery
        </h4>
        <p className="text-gray-400 mt-3">
          Master emotional control and eliminate emotional trading mistakes.
        </p>
      </Link>

    </div>
  </div>


  {/* ===== Latest Blogs ===== */}
  <div>
    <div className="flex justify-between items-center mb-10">
      <h3 className="text-3xl font-bold">Latest Blogs</h3>
      <Link
        href="/blogs"
        className="text-blue-500 hover:underline"
      >
        View All →
      </Link>
    </div>

    {blogs.length === 0 ? (
      <p className="text-gray-400">No blogs published yet.</p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog: any) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.slug}`}
            className="border border-gray-800 rounded-xl p-6 bg-[#121826] block hover:border-blue-500 transition"
          >
            <h4 className="text-xl font-bold">{blog.title}</h4>
            <p className="text-gray-400 mt-3 line-clamp-3">
              {blog.content}
            </p>
          </Link>
        ))}
      </div>
    )}
  </div>

</section>

      
    </main>
  );
}
