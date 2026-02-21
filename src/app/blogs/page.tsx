import prisma from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-black text-white px-10 py-24">
      <h1 className="text-4xl font-bold mb-12">Blogs</h1>

      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition block"
            >
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="text-gray-400 mt-3 line-clamp-3">
                {blog.content}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
