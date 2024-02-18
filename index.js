import express from "express";
import dotenv from "dotenv";
import { Resend } from "resend";
import cors from "cors";
import { createEmail } from "./email.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "Hola" });
});

app.post("/", async (req, res) => {
  const resend = new Resend(process.env.RESEND_KEY);
  const { name, email, phone, message } = req.body;
  const emailHtml = createEmail(name, email, phone, message);

  try {
    const { data, error } = await resend.emails.send({
      from: "Contacto PC APPS <onboarding@resend.dev>",
      to: "administrador@pcappsint.com",
      subject: `NUEVO CLIENTE INTERESADO | ${name}`,
      html: emailHtml,
    });
    if (error) {
      console.error({ error });
      return res.status(400).json({ msg: error });
    }
    return res.status(200).json({ email: data });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: error });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log("Server iniciado");
});
