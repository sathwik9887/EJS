import express from "express";
import user from "./middleware/logs.jss";
const app = express();

app.use(user);

app.get("/", user, (req, res) => {});

app.listen(3006, () => {
  console.log("Server Up");
});
