const router = require("express").Router();
const userRoutes = require("./user");
const dateRoutes = require("./dates");

// User routes
router.use("/user", userRoutes);
// dates routes
router.use("/dates", dateRoutes);


module.exports = router;