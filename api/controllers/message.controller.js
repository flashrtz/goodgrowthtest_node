import * as messageService from "../services/message.service.js";

export const createMessage = async (req, res) => {
  try {
    const results = await messageService.createMessage(req.body, req.user);
    res.send({ message: "success", body: results });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const results = await messageService.getAllMessages(req.query);
    res.send({ message: "success", body: results });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

export const getMessageById = async (req, res) => {
  try {
    const results = await messageService.getMessageById(id);
    res.send({ message: "success", body: results });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
