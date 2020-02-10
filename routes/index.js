const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app => need to set to `build` instead of `public` after hosting
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
