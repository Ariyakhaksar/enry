import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async (): Promise<void> => {
   if (mongoose.connections[0].readyState) {
      console.log("Already connected to the database ✅");
      return;
   }

   mongoose.set("strictQuery", false);

   const connectWithRetry = (): void => {
      console.log("Attempting to connect to MongoDB... 🟠");
      mongoose
         .connect(
            process.env.MONGO_URI as string,
            {
               useNewUrlParser: true,
               useUnifiedTopology: true,
               serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
            } as ConnectOptions
         )
         .then(() => {
            console.log("Connected to DB 🟢");
         })
         .catch((err) => {
            console.error("Failed to connect to MongoDB", err);
            throw new Error("Failed to connect to MongoDB");
         });
   };

   if (typeof process.env.MONGO_URI === "string") {
      connectWithRetry();
   } else {
      console.error("MONGO_URI is not defined or not a string.");
   }
};

export default connectDB;
