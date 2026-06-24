require("dotenv").config();
const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/contact", contactRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Portfolio backend running on http://localhost:${PORT}`);
});
