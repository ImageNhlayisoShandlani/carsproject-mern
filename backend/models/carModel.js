import mongoose from "mongoose";

const carsSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    horsepower: {
      type: Number,
      required: true,
    },
    price_zar: {
      type: Number,
      required: true,
    },
    kms: {
      type: Number,
      required: true
    },
    makebage: {
      type: String,
      required: false
    },
    serviceHistory: {
      type: Object,
      required: true
    },
    overallCondition: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Car = mongoose.model("Car", carsSchema);
export default Car;
