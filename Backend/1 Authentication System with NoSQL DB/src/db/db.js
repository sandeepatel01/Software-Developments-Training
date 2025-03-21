import mongoose from "mongoose";
import { DB_NAME } from "../constant";

const connectDB = async () => {
  const connection = mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
}