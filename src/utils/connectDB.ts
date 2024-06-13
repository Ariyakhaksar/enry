// import mongoose from "mongoose";

// async function connectDB() {
//    if (mongoose.connections[0].readyState) return;
//    mongoose.set("strictQuery", false);
//    if (typeof process.env.MONGO_URI == "string") {
//       await mongoose.connect(process.env.MONGO_URI);
//    }
//    console.log("Connected to DB");
// }

// export default connectDB;

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
               bufferCommands: false,
               serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
            } as ConnectOptions
         )
         .then(() => {
            console.log("Connected to DB 🟢");
         })
         .catch((err) => {
            console.error(
               "Failed to connect to MongoDB on startup - retrying in 5 sec",
               err
            );
            if (err.code === "ECONNRESET") {
               setTimeout(connectWithRetry, 5000);
            } else {
               console.error("Non-recoverable error:", err);
            }
         });
   };

   if (typeof process.env.MONGO_URI === "string") {
      connectWithRetry();
   } else {
      console.error("MONGO_URI is not defined or not a string.");
   }
};

export default connectDB;
