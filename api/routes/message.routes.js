import express from "express";
import * as messageController from "../controllers/message.controller.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

router.post(
  "/",
  asyncHandler(async (req, res) => {
    return messageController.createMessage(req, res);
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    return messageController.getAllMessages(req, res);
  })
);

router.get(
  "/:messageId",
  asyncHandler(async (req, res) => {
    return messageController.getMessageById(req, res);
  })
);

export default router;
