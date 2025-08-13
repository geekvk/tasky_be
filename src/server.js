import express from "express";
import { ENV } from "./config/env.js"
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.get("/",(req ,res) => {
    res.send("hello");
})

const PORT = ENV.PORT;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))