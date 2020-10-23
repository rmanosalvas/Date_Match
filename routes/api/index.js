const router = require("express").Router();
const userRoutes = require("./user");
const dateRoutes = require("./dates");
const matchRoutes = require("./match");

// User routes
router.use("/user", userRoutes);
// Dates routes
router.use("/dates", dateRoutes);
// Match routes
router.use("/match", matchRoutes);

module.exports = router;