import dotenv from "dotenv";
dotenv.config();
import app from "./app";

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connected successfully");
    const PORT = process.env.PORT ?? 3004;
    app.listen(PORT, function () {
      console.log(`The server is running successfully on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("Error on connection on MongoDB", err));
