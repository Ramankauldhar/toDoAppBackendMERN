const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Todo App" });
});

module.exports = router;
