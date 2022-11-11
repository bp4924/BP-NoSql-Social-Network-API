const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>Not Found (index.js 7)</h1>");
});

/* router.use("/api/user-routes", userRoutes);
router.use("/api/thought-routes", thoughtRoutes);
 */
module.exports = router;
