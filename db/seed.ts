import "dotenv/config";
import { db } from "./client";
import { employees } from "./schema";



async function seed() {
  await db.insert(employees).values([
    {
      name: "Amit Sharma",
      age: 28,
      empClass: "A",
      subjects: "Math, Physics",
      attendance: 92,
    },
    {
      name: "Neha Verma",
      age: 32,
      empClass: "B",
      subjects: "English, History",
      attendance: 88,
    },
    {
      name: "Rohit Singh",
      age: 26,
      empClass: "A",
      subjects: "Chemistry, Biology",
      attendance: 95,
    },
    {
      name: "Pooja Patel",
      age: 30,
      empClass: "C",
      subjects: "Economics, Accounts",
      attendance: 90,
    },
  ]);

  console.log("✅ Employees seeded");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
