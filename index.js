import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import routes from "./api/routes/main.routes.js";
import { gglDB } from "./api/config/connection.js";
// import Message from "./api/models/Message.model.js";

// CONFIGURATION
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

// ROUTES
app.use("/api", routes);

// HOME-ROUTE
app.get("/", (req, res) => {
  res.json("API is running!");
});

// MYSQL SETUP
const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  gglDB
    .authenticate()
    .then(() => {
      console.log("GGL Database connection success");
    })
    .catch((error) => console.log("Database connection error", error));
  console.log(`Server listening at port ${PORT}`);

  // Sync the models with the database
  // Message.sync({
  //   force: true,
  // })
  //   .then(() => {
  //     console.log("GGL Database synchronized successfully");
  //   })
  //   .catch((error) => {
  //     console.error("Error synchronizing database:", error);
  //   });
});

export default app;
