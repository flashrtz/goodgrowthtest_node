import { DataTypes } from "sequelize";
import { gglDB } from "../config/connection.js";

const Message = gglDB.define(
  "messages",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false,
      default: new Date(),
      unique: false,
    },
  },
  { timestamps: false }
);

export default Message;
