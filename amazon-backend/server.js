import express, { urlencoded } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import uploadRouter from "./routers/uploadRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB_URL || "mongodb://localhost/amazon", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/uploads/", uploadRouter);
app.use("/api/users/", userRouter);
app.use("/api/products/", productRouter);
app.use("/api/orders/", orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(express.static(path.join(__dirname, "/amazon-frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/amazon-frontend/build/index.html"));
});

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
