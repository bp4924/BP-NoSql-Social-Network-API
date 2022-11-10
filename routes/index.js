const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>404 Error</h1>");
});

router.use("/api/users", userRoutes);
router.use("/api/thoughts", thoughtRoutes);

module.exports = router;