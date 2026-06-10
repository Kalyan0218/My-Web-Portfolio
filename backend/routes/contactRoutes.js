const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");
const { submitContact } = require("../controllers/contactController");
const { validateContact } = require("../middleware/validateContact");

// Limit to 5 form submissions per 15 minutes per IP
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

// POST /api/contact
router.post("/", contactLimiter, validateContact, submitContact);

module.exports = router;
