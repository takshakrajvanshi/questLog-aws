require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log(`Database is setup on ${mongoose.connection.host}`);
    })
    .catch((error) => {
      console.log("Database connection failed!");
      console.error(error);
      process.exit(1);
    });
};

module.exports = connectDB;
