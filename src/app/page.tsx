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
      take: 3,
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
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="relative px-6 py-32 text-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero1.png')" }}
        />

        {/* WHITE + GREEN OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-green-100/60" />

        {/* CONTENT */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Master Trading With
            <span className="text-green-600"> Structure & Discipline</span>
          </h2>

          <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg">
            Trade XAUUSD with a structured, risk-first system.  
            No signals. No gambling. Learn how professionals manage risk & execution.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="px-8 py-4 bg-green-600 text-white rounded text-lg hover:bg-green-700 transition font-semibold"
            >
              Start Learning Free
            </Link>

            <Link
              href="/dashboard"
              className="px-8 py-4 border border-green-600 text-green-600 rounded text-lg hover:bg-green-50 transition"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="px-10 py-24">
        <h3 className="text-3xl font-bold mb-10">
          Featured Programs
        </h3>

        {courses.length === 0 ? (
          <p className="text-gray-500">No courses available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course: any) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md hover:border-green-500 transition block"
              >
                <h4 className="text-2xl font-bold">
                  {course.title}
                </h4>

                <p className="text-gray-600 mt-3">
                  {course.description
                    ? course.description.slice(0, 120) + "..."
                    : "No description"}
                </p>

                <p className="text-green-600 mt-4 font-semibold">
                  {course.price}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* TRUST SECTION */}
      <section className="px-6 md:px-10 py-20 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">

          <h3 className="text-3xl font-bold mb-6">
            Why Traders Trust Us
          </h3>

          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We focus on real trading skills — not signals, not hype.
          </p>

          <div className="grid md:grid-cols-4 gap-6 text-left">

            {[
              "📊 Real Trade Breakdown",
              "🛡 Risk First Approach",
              "🧠 Psychology Focus",
              "📈 Structured System",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="font-semibold">{item}</p>
                <p className="text-gray-600 text-sm mt-2">
                  Learn real professional trading concepts.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PROOF SECTION */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto text-center">

          <h3 className="text-3xl font-bold mb-6">
            Proof of Work
          </h3>

          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Real results, real consistency — no fake screenshots.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Funded Accounts",
              "Trade Consistency",
              "Real Student Growth",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-xl font-semibold">{item}</p>
                <p className="text-gray-600 mt-2">
                  Verified real trading improvement.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/certificates"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded text-lg font-semibold"
            >
              View Proof →
            </Link>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="px-6 md:px-10 pb-24">

        <div className="mb-20">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-3xl font-bold">Featured Learning Material</h3>
            <Link href="/resources" className="text-green-600 hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { title: "Risk Management Blueprint", link: "risk-management" },
              { title: "Trading Plan", link: "trading-plan" },
              { title: "Psychology Mastery", link: "psychology-discipline" },
            ].map((item, i) => (
              <Link
                key={i}
                href={`/resources/${item.link}`}
                className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md hover:border-green-500 transition block"
              >
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-gray-600 mt-3">
                  Learn real trading concepts step-by-step.
                </p>
              </Link>
            ))}

          </div>
        </div>

        {/* BLOGS */}
        <div>
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-3xl font-bold">Latest Blogs</h3>
            <Link href="/blogs" className="text-green-600 hover:underline">
              View All →
            </Link>
          </div>

          {blogs.length === 0 ? (
            <p className="text-gray-500">No blogs published yet.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {blogs.map((blog: any) => (
                <Link
                  key={blog.id}
                  href={`/blogs/${blog.slug}`}
                  className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md hover:border-green-500 transition"
                >
                  <h4 className="text-xl font-bold">{blog.title}</h4>
                  <p className="text-gray-600 mt-3 line-clamp-3">
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