import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectMongo;