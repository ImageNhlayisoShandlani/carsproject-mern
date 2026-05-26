import express, { response } from "express";
import mongoose from "mongoose";
import Car from "../models/carModel.js";
const router = express.Router();


router.get("/", async (req, res) => {
    const cars = await Car.find({});
    res.json(cars)
});

router.get("/:id", async(req, res) => {

    try {
        const car = await Car.findById(req.params.id);
        res.json(car);
    } catch (error) {
        res.status(404);
        res.json({
            code: 404,
            message: "Car Not Found" 
        })
    }
})

export default router;