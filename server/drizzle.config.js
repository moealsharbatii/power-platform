import { defineConfig } from "drizzle-kit";
import fs from "fs";

export default defineConfig({
  schema: fs.readdirSync("./migrations").map((fileName) => {
    return `./migrations/${fileName}`;
  }),
  dialect: "sqlite",
  out: "./generated-sql",
});
