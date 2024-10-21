const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const messageRoutes = require("./Routes/messages_routes");
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

function dbConnect() {
  mongoose
    .connect(process.env.mongo_URL || "mongodb://127.0.0.1:27017/chatMessage")
    .then(() => {
      console.log("Database Connected Succesfully");
    })
    .catch((error) => {
      console.log("Server error Data base not connected", error);
    });
}
dbConnect();
app.use("/messages", messageRoutes);
const Host = process.env.host || "localhost";
const Port = process.env.port || 8000;

app.listen(Port, Host, () => {
  console.log(`Server is runnig on http://${Host}:${Port}`);
});
