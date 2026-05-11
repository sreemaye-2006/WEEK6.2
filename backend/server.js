import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = exp();

// CORS middleware - allows both local dev and deployed frontend
app.use(
  cors({
    origin: "https://week6-2-1.onrender.com",
    credentials: true,
  })
);

// body parser middleware
app.use(exp.json());

// emp api middleware
app.use("/emp-api", empRoute);

// test route
app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

// DB connection
const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URL);
    console.log("DB connected");
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}..`));
  } catch (err) {
    console.log("Error in DB connection:", err.message);
    process.exit(1);
  }
};

connectDB();

// error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);
  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
