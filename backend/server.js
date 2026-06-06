import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { CARS, CAR_Type, CAR_Make } from "./db/cars.js";
import router from "./routes/productRoutes.js";
import { connectDB } from "./config/dbConnect.js";
dotenv.config();

const PORT = process.env.SERVE_PORT || 5000;
const server = express();
connectDB();


server.use(cors());
server.use("/cars", router)
server.use("/cars/:id", router)
server.listen(PORT, () => {
  console.log("App is running on PORT: " + PORT);
  console.log("Routes:");
  console.log("Get - http://localhost:5000/cars - Retrievs all cars");
  console.log("Get - http://localhost:5000/cars/:id - Retrievs cars with id specified in endpoint");
});