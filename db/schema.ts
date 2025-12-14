
import { pgTable, serial, text, integer, real } from "drizzle-orm/pg-core";

export const employees = pgTable("employees", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: integer("age").notNull(),
  designation: text("designation"),
  gender: text("gender"),
  attendence: real("attendence").default(0),
});
