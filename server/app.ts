import * as express from "express";

async function initServer() {
  const app = express();
  const port = process.env.PORT || 8002;

  app.get("/", (req, res) => {
    res.send("Hello World! Welcome to Team 3!!!");
  });

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}

initServer();
