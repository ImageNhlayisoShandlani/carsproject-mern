import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connection is established with database @${connection.connection.host}`)
    } catch (error) {
        console.log(`Error with the connection`);
        process.exit();
    }
}