import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("Users", {
  id: integer("id").primaryKey(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  username: text("username").unique().notNull(),
});

/**
CREATE TABLE Users (
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
);
 */

// class Exercise {
//   constructor() {
//     this.paused = false;
//     this.tempo = false;
//     this.reps = 0;
//   }

//   reps(num) {
//     // do something
//     this.reps = num;

//     return this;
//   }

//   paused() {
//     // do something
//     this.paused = true;
//     return this;
//   }

//   tempo() {
//     // do somethning
//     this.tempo = true;
//     return this;
//   }
// }

// const squat = new Exercise();

// const exercie = squat.create(10)  .paused().tempo();
// //                   ^ reps = 10      10      10
// //                     paused = false   true  true
// //                     tempo = false  false   true
