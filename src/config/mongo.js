import mongoose from "mongoose";

const dbConnect = async () => {
  const DB_URI = process.env.DB_URI;
  try {
    const cnn = await mongoose.connect(DB_URI);
    if (cnn) {
      console.log("Connected to MongoDB");
      return cnn;
    }
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
