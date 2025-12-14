import { eq } from "drizzle-orm";
import { db } from "../db/client";
import { employees } from "../db/schema";
import { Employee } from "./types";

export const resolvers = {
  Query: {
    listEmployees: async () => {
      // console.log("DB TYPE:", typeof db);
      const data = await db.select().from(employees).execute();
      console.log("DATA:", data);
      return data;
    },
  },

  Mutation: {
    addEmployee: async (_: any, data: Employee) => {
      const [employee] = await db
        .insert(employees)
        .values({
          name: data.name,
          age: data.age,
          designation: data.designation!,
          gender: data.gender!,
          attendence: data.attendence!,
        })
        .returning();
      return employee;
    },
    updateEmployee: async (_: any, args: any) => {
      const [employee] = await db
        .update(employees)
        .set({
          name: args.name,
          age: args.age,
          designation: args.designation,
          gender: args.gender,
          attendence: args.attendence,
        })
        .where(eq(employees.id, args.id))
        .returning();

      return employee;
    },
  },
};
