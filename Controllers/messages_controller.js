const messageModel = require("../Models/ChatMessage");

const getMessage = async (req, res) => {
  try {
    const receiveMessage = await messageModel.find();
    res.json(receiveMessage);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const postMessage = async (req, res) => {
  try {
    const { user, message } = req.body;
    if (!user || !message) {
      return res.status(400).json({ error: "User and message are required" });
    }
    const chatMessage = new messageModel({
      user,
      message,
    });
    await chatMessage.save();
    res.status(200).json(chatMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
    getMessage,
    postMessage

}
