const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Movies & Tv" },
        { name: "Famous People" },
        { name: "Musicians" },
        { name: "Games" },
        { name: "Animals" },
        { name: "Scientist" },
        { name: "Programming" },
      ],
    });
  } catch (error) {
    console.error("Error seeding default categories", error);
  } finally {
    await db.$disconnect();
  }
}

main();
