import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

/**
 * id
 * name
 *
 */

export const exercises = sqliteTable("Exercises", {
  id: integer("id").primaryKey(),
  name: text("name").unique().notNull(),
});

export const compounds = sqliteTable("Compounds", {
  id: integer("id").primaryKey(),
  compoundsId: integer("compoundsId")
    .notNull()
    .references(() => {
      return exercises.id;
    }),
});

export const accessories = sqliteTable("Accessories", {
  id: integer("id").primaryKey(),
  accessoriesId: integer("accessoriesId")
    .notNull()
    .references(() => {
      return exercises.id;
    }),
});

/**
 *
 * exercises             accessories
 * ---------|        |----------------|
 * id   PK  |        | id        PK    |
 * name     |  <---  | exercise_id FK -> exercises.id |
 *
 */
