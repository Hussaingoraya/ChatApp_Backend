const mongoose = require("mongoose");
const ChatMessageSchema = new mongoose.Schema({
  user: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});
const chatSchema = mongoose.model('ChatMessage',ChatMessageSchema)

module.exports = chatSchema
