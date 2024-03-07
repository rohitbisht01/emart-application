const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Mongodb connected with server: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error connecting with Mongodb: `, error.message);
  }
};

module.exports = connectDatabase;
