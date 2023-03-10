import dotenv from "dotenv";
dotenv.config();

const environmentVariable = {
  PORT: process.env.PORT as string,
  MONGODB_STRING_LOCAL: process.env.MONGODB_STRING_LOCAL!,
  //or
  // PORT: process.env.PORT!
};
export default environmentVariable;
