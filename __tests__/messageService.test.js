import { jest } from "@jest/globals";
import {
  createMessage,
  getAllMessages,
  getMessageById,
} from "../api/services/message.service.js";
import Message from "../api/models/Message.model.js";

jest.mock("../api/models/Message.model.js");

describe("Message Service", () => {
  describe("createMessage", () => {
    it("should create a new message", async () => {
      const dataParams = { message: "Hello, World!" };
      const createdMessage = {
        id: 1,
        message: "Hello, World!",
        createdDate: new Date(),
      };

      Message.create.mockResolvedValue(createdMessage);

      const result = await createMessage(dataParams);

      expect(result).toEqual(createdMessage);
      expect(Message.create).toHaveBeenCalledWith({
        message: "Hello, World!",
        createdDate: expect.any(Date),
      });
    });
  });

  describe("getAllMessages", () => {
    it("should return paginated messages", async () => {
      const messages = {
        count: 2,
        rows: [
          { id: 1, message: "Message 1", createdDate: new Date() },
          { id: 2, message: "Message 2", createdDate: new Date() },
        ],
      };

      Message.findAndCountAll.mockResolvedValue(messages);

      const result = await getAllMessages(1, 10);

      expect(result).toEqual({
        totalItems: 2,
        totalPages: 1,
        currentPage: 1,
        messages: messages.rows,
      });
      expect(Message.findAndCountAll).toHaveBeenCalledWith({
        limit: 10,
        offset: 0,
      });
    });
  });

  describe("getMessageById", () => {
    it("should return the message with the given ID", async () => {
      const message = { id: 1, message: "Message 1", createdDate: new Date() };

      Message.findOne.mockResolvedValue(message);

      const result = await getMessageById(1);

      expect(result).toEqual(message);
      expect(Message.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });
});
