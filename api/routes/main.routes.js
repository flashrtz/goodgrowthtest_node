import express from "express";

import messageRoutes from "./message.routes.js";

const router = express.Router();

router.use("/messages", messageRoutes);

export default router;
