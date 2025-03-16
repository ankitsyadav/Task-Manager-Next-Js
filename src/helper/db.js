import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "task-manager",
    });
    console.log("dbConnected", connection.host);
  } catch (error) {
    console.log("failed to conect to database", error);
  }
};
