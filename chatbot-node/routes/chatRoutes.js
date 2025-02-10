const express = require("express");
const Chat = require("../models/Chat");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

const chatbotResponses = {
  "hello": "Hi there! How can I assist you?",
  "how are you?": "I'm just a bot, but I'm doing great! How about you?",
  "what is your name?": "I'm a chatbot built for this test.",
};

router.post("/savechat", authMiddleware, async (req, res) => {
  const { question } = req.body;
  const response = chatbotResponses[question.toLowerCase()] || "Sorry, I don't understand that.";

  try {
    let chat = await Chat.findOne({ userId: req.user.userId });
    if (!chat) {
      chat = new Chat({ userId: req.user.userId, messages: [] });
    }
    chat.messages.push({ question, response });
    await chat.save();
    res.json({ response });
  } catch (error) {
    res.status(500).json({ message: "Error saving chat", error });
  }
});

router.get("/chat", authMiddleware, async (req, res) => {
  const chat = await Chat.findOne({ userId: req.user.userId });
  res.json(chat ? chat.messages : []);
});

module.exports = router;