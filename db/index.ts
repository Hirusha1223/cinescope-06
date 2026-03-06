import { MongoClient } from "mongodb";

const OPTIONS = {};
const MONGODB_URI = process.env.MONGODB_URI || "";
const client = new MongoClient(MONGODB_URI, OPTIONS);

export const db = client.db("sample_mflix");
