import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";
import { users } from "./createUsersTable";
import { exercises } from "./createExercisesTable";

/**
 * id
 * name
 * day
 */

/**
 *
 * CREATE TABLE Workouts (
 *   id  INTEGER PRIMARY KEY
 *   exerciseId INTEGER
 *   FOREIGN KEY (workoutId) REFERENCES Exercises(id)
 * );
 *
 */
export const workouts = sqliteTable("Workouts", {
  id: integer("id").primaryKey(),
  userId: integer("userId").references(() => {
    return users.id;
  }),
  date: integer("date").notNull(),
});

export const workoutSessions = sqliteTable("WorkoutSessions", {
  id: integer("id").primaryKey(),
  workoutId: integer("workoutId").references(() => {
    return workouts.id;
  }),
  exerciseId: integer("exerciseId").references(() => {
    return exercises.id;
  }),
  sets: integer("sets").notNull(),
  reps: integer("reps").notNull(),
  weight: real("weight").notNull(),
});

export const blocks = sqliteTable("Blocks", {
  id: integer("id").primaryKey(),
  userId: integer("userId").references(() => {
    return users.id;
  }),
  workoutId: integer("workoutId").references(() => {
    workouts.id;
  }),
  name: text("name"),
  startDate: integer("startDate").notNull(),
  endDate: integer("endDate").notNull(),
});

/**
 *
 * workout
 *  id         date            userId
 *  1         22.08.24       1 (steven)
 *  2         23.08.24       1 (steven)
 *  3         24.08.24       2 (me)
 */

/**
 *
 * block
 * id           name          start               end       workoutId      userId
 * 1             welcome back   --                --          3              1
 * 2              --           --                --           4              2
 *
 */

/**
 *
 * workout sesh
 * id        workoutId    exerciseId         sets      reps         w          u
 *  1          1              2 (squat)       10        20         900          kg
 *  2          1            3 (dead)        10          20          900         kg
 *  3          1            4 (bicept)      10          29           900        kg
 *  4          2
 *  5          3
 */
