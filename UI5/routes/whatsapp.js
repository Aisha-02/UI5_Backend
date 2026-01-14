import { Router } from "express";
const router = Router();
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

router.post("/send", async (req, res) => {
  try {
    const { phone, message } = req.body;

    if (!phone || !message) {
      return res.status(400).json({ error: "Phone and message are required" });
    }

    const response = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: `whatsapp:${phone}`,
      body: message,
    });

    res.json({
      success: true,
      sid: response.sid,
    });
  } catch (error) {
    console.error("Twilio error:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
