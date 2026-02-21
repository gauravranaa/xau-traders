export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";

export default async function CertificatesPage() {
  let certificates = [];

  try {
    certificates = await prisma.certificate.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Failed to fetch certificates:", error);
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Our Funded Certificates
      </h1>

      {certificates.length === 0 ? (
        <p className="text-center text-gray-400">
          No certificates available yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert: any) => (
            <div
              key={cert.id}
              className="bg-[#121826] border border-gray-800 rounded-xl p-4 hover:border-green-500 transition"
            >
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="rounded-lg mb-4 w-full h-60 object-cover"
              />

              <h2 className="text-xl font-semibold mb-2">
                {cert.title}
              </h2>

              <p className="text-sm text-gray-400">
                Issued By: {cert.issuedBy}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}