import express from "express";
import students from "./routes/student.js";
const app = express();

app.use("./students", students);

app.listen(3006, () => {
  console.log("Server Up");
});
