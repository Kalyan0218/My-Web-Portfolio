const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");
const { submitContact } = require("../controllers/contactController");
const { validateContact } = require("../middleware/validateContact");

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many messages sent. Please try again in 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/", contactLimiter, validateContact, submitContact);

module.exports = router;
