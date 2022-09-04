import express from "express";
import dotenv from "dotenv";
import options from "./Database/connection.js";
import Routes from "./Routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import cassandra from "cassandra-driver";

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is Running on Port:${PORT}`);
});
