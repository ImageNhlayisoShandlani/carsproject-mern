import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/dbConnect.js";
import Car from "./models/carModel.js";
import { CARS } from "./db/cars.js";
dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Car.deleteMany();

    await Car.insertMany(CARS.cars);

    console.log("Cars inserted into database");
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

importData();
