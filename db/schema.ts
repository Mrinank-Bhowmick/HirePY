import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

export const interviews = pgTable("interviews", {
  id: serial("id").primaryKey(),
  position: text("position").notNull(),
  description: text("description").notNull(),
  duration: integer("duration").notNull(),
  type: text("type").notNull(),
  userId: text("user_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
