
const validateContact = (req, res, next) => {
  const { name, email, message } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("A valid email address is required.");
  }

  if (!message || message.trim().length < 10) {
    errors.push("Message must be at least 10 characters.");
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.message = message.trim();
  if (req.body.phone) req.body.phone = req.body.phone.trim();

  next();
};

module.exports = { validateContact };
