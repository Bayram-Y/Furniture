import dotenv from "dotenv";
dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
});
import server from "./app";
import mongoose from "mongoose";



mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connected successfully");
    const PORT = process.env.PORT ?? 3003;
    server.listen(PORT, function () {
      console.log(`The server is running successfully on port: ${PORT}`);
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => console.log("Error on connection on MongoDB", err));
