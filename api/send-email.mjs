import { Resend } from "resend";

export default async function handler(req, res) {

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Método no permitido" });

  const { txtName, txtMail, txtMessage, txtCompany, txtService, txtPhone } = req.body;
  if (!txtName || !txtMail || !txtMessage || !txtCompany || !txtService || !txtPhone) return res.status(400).json({ error: "Todos los campos son obligatorios" });

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Contacto Website <contacto@revowall.com>",
      to: ["contacto@revowall.com"],
      subject: "Nuevo mensaje desde el formulario de contacto",
      html: `<p><strong>Nombre:</strong> ${txtName}</p>
              <p><strong>Empresa:</strong> ${txtCompany}</p>
              <p><strong>Servicio:</strong> ${txtService}</p>
              <p><strong>Teléfono:</strong> ${txtPhone}</p>
             <p><strong>Email:</strong> ${txtMail}</p>
             <p><strong>Mensaje:</strong> ${txtMessage}</p>`,
    });

    res.status(200).json({ success: true, message: "Correo enviado correctamente" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
