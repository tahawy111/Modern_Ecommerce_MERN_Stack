import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const connection = mongoose.connect(process.env.MONGO_URL, {
      userUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Mongo Connected");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
