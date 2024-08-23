import Fastify from "fastify";

console.log("Starting.");

const app = Fastify({
  logger: true,
});

// GET app.com/api/workouts
// GET app.com/api/workouts/1?createdAt=18246189&foo=bar&something=12791293212
app.get("/api/:workout", (request, response) => {
  // check request params (params or query or body)
  // do the database query
  // return queried data
});

app.post("/api", (request, response) => {});
app.put("/api");

app.delete("/api");

await app.listen({
  port: 5001,
});
