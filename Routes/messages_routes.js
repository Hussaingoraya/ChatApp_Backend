const express = require("express")
const router = express.Router()
const messageControllers = require("../Controllers/messages_controller")

router.get("/",messageControllers.getMessage)
router.post("/",messageControllers.postMessage)

module.exports = router