import express from "express";
const app = express();

app.get("/product", (req, res) => {
  const { category, id } = req.query;

  res.send(`Product Category: ${category} & Product ID: ${id }`);
});

app.listen(3006, () => {
  console.log("Server Up");
});
