import fastify from "fastify";

const app = fastify();

app.get("/", (req, res) => {
  res.code(200).send("Hello world!");
});

app.listen({ port: 3000 }, (err, addr) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening on port ${addr}`);
});
