const router = require("express").Router();
const apiRoutes = require("./routes/api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>Not Found</h1>");
});

router.use("/api/users", userRoutes);
router.use("/api/thoughts", thoughtRoutes);

module.exports = router;
