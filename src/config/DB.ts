import mongoose from "mongoose";
import environmentVariable from "./environmentVariable";

const DB = environmentVariable.MONGODB_STRING_LOCAL;

const dbConfig = async () => {
  try {
    const conc = await mongoose.connect(DB);
    console.log(`db is connected: ${conc.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default dbConfig;
