import AdminVideoForm from "./AdminVideoForm";
import prisma from "@/lib/prisma";

export default async function AdminVideosPage() {
  const courses = await prisma.course.findMany({
    select: {
      id: true,
      title: true,
    },
  });

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Upload Course Video
      </h1>

      <AdminVideoForm courses={courses} />
    </div>
  );
}
