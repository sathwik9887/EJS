import express from "express";
import { join } from "path";
import route from "./routes/route.js";
const app = express();

app.set("view engine", "ejs");
app.use(express.static(join(process.cwd(), "public")));

app.listen(3006, () => {
  console.log("Server Up");
});
