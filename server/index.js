import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const mongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;
