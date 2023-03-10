import express from "express";
import { appConfig } from "./app";
import dbConfig from "./config/DB";
import environmentVariable from "./config/environmentVariable";

const app = express();
//Application intiationalizinon
appConfig(app);
//DB Intiatization
dbConfig();

app.listen(environmentVariable.PORT, () => {
  console.log("Server is up and running", environmentVariable.PORT);
});
