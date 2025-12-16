import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is missing");
    }
    if (!process.env.CONTACT_TO_EMAIL) {
      throw new Error("CONTACT_TO_EMAIL is missing");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      subject: `【Portfolio】お問い合わせ：${body.name}`,
      text: `
Name: ${body.name}
Email: ${body.email}

Message:
${body.message}
      `,
    });

    return { success: true, result };
  } catch (error: any) {
    console.error("CONTACT API ERROR:", error);

    throw createError({
      statusCode: 500,
      statusMessage: error.message || "Internal Server Error",
    });
  }
});
