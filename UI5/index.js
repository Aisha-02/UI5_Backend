import "dotenv/config";
import express, { json } from "express";
import cors from "cors";

import whatsappRoutes from "./routes/whatsapp.js";

const app = express();
app.use(cors());
app.use(json());

app.use("/api/whatsapp", whatsappRoutes);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "http://localhost";

app.listen(PORT, () => {
  console.log("🚀 Server started successfully");
  console.log(`📡 Base URL     : ${HOST}:${PORT}`);
  console.log(`📲 WhatsApp API : ${HOST}:${PORT}/api/whatsapp/send`);
});
