/**
 * Central error handler.
 * Must be registered last with app.use() in server.js.
 */
const errorHandler = (err, _req, res, _next) => {
  console.error("[Error]", err.message || err);

  // Nodemailer auth failures give a helpful message
  if (err.code === "EAUTH") {
    return res.status(500).json({
      success: false,
      message:
        "Email service is misconfigured. Please contact me directly at kalyannaicker18@gmail.com.",
    });
  }

  res.status(500).json({
    success: false,
    message:
      "Something went wrong on our end. Please try again or contact me directly.",
  });
};

module.exports = { errorHandler };
