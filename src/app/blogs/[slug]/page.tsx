import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug },
  });

  if (!blog) return notFound();

  return (
    <div className="min-h-screen bg-black text-white px-10 py-24">
      <h1 className="text-4xl font-bold mb-8">{blog.title}</h1>
      <div className="text-gray-300 whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
}
