import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";
import dbConnect from "./src/config/mongo.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api", router);

const bootstrap = async () => {
  app.listen(PORT, async () => {
    await dbConnect();
    console.log(`server runing on port ${PORT}`);
  });
};

bootstrap();
