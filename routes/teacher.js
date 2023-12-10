import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Teachers");
});
router.post("/create", (req, res) => {
  res.send("Sign in");
});
router.put("/update", (req, res) => {
  res.send("Update Teachers");
});
router.delete("/delete", (req, res) => {
  res.send("Delete Teachers");
});

export default router;
