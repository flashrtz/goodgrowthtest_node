import Message from "../models/Message.model.js";

//create a message
export const createMessage = async (dataParams) => {
  try {
    const { message } = dataParams;

    const newMessage = await Message.create({
      message,
      createdDate: new Date(),
    });

    return newMessage;
  } catch (error) {
    throw error.message;
  }
};

//get all the messages with pagination
export const getAllMessages = async (page = 1, limit = 10) => {
  try {
    const offset = (page - 1) * limit;

    const messages = await Message.findAndCountAll({
      limit,
      offset,
    });

    return {
      totalItems: messages.count,
      totalPages: Math.ceil(messages.count / limit),
      currentPage: page,
      messages: messages.rows,
    };
  } catch (error) {
    throw error.message;
  }
};

//get a message by message ID
export const getMessageById = async (messageId) => {
  try {
    const message = await Message.findOne({
      where: {
        id: messageId,
      },
    });

    return message;
  } catch (error) {
    throw error.message;
  }
};
