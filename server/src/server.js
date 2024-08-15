import Fastify from "fastify";

console.log("Starting.");

const app = Fastify({
  logger: true,
});

app.get("/api", (request, response) => {
  return {
    hello: "yo",
  };
});

await app.listen({
  port: 5001,
});
