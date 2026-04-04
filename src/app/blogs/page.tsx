import prisma from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-10 py-24">

      {/* HEADING */}
      <h1 className="text-4xl font-bold mb-12 text-center">
        Trading Blogs & Insights
      </h1>

      {/* BLOG GRID */}
      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">
          No blogs available.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="
                bg-white border border-gray-200 
                p-6 rounded-xl 
                shadow-sm hover:shadow-md 
                hover:border-green-500 
                transition block
              "
            >
              <h2 className="text-xl font-bold">
                {blog.title}
              </h2>

              <p className="text-gray-600 mt-3 line-clamp-3">
                {blog.content}
              </p>

              {/* READ MORE */}
              <p className="mt-4 text-green-600 font-medium text-sm">
                Read More →
              </p>
            </Link>
          ))}
        </div>
      )}

      {/* CTA SECTION */}
      <div className="mt-24 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Want to Learn Trading the Right Way?
        </h3>

        <p className="text-gray-600 mb-6">
          Build a strong foundation with structured learning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/resources"
            className="
              px-8 py-4 
              border border-green-600 
              text-green-600 
              rounded-lg font-semibold 
              hover:bg-green-50 
              transition
            "
          >
            Start Learning Free
          </Link>

          <Link
            href="/courses"
            className="
              px-8 py-4 
              bg-green-600 text-white 
              rounded-lg font-semibold 
              hover:bg-green-700 
              transition
            "
          >
            Explore Courses
          </Link>

        </div>
      </div>

    </div>
  );
}