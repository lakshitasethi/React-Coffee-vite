require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const twilio = require("twilio");

const client = new twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.use(cors());
app.use(express.json());

app.post("/send-order", async (req, res) => {
  const { cartItems, total } = req.body;

  const messageText = `🛒 *New Order Received!*\n\n${cartItems
    .map(
      (item, i) =>
        `${i + 1}. ${item.title} - ₹${item.price} x ${item.quantity}`
    )
    .join("\n")}\n\n💰 *Total: ₹${total}*`;

  try {
    const message = await client.messages.create({
      body: messageText,
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: process.env.MY_WHATSAPP_NUMBER,
    });

    res.status(200).json({ success: true, sid: message.sid });
  } catch (err) {
    console.error("Error sending WhatsApp message", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
