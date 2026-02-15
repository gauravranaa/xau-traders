import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  await prisma.course.create({
    data: {
      title: "Crypto Trading Basics",
      description: "Learn crypto trading from zero",
      price: 0,
      thumbnail: "https://via.placeholder.com/300",
      videos: {
        create: [
          {
            title: "Introduction",
            url: "https://example.com/video1"
          },
          {
            title: "Market Basics",
            url: "https://example.com/video2"
          }
        ]
      }
    }
  });

  console.log("✅ Seeding completed");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
