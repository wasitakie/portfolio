"use server";

import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "@/lib/schemas";
import EmailTemplate from "@/components/ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (emailFromData: z.infer<typeof formSchema>) => {
  try {
    const { error } = await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: [process.env.RESEND_TO_EMAIL!],
      subject: emailFromData.subject,
      react: EmailTemplate({
        name: emailFromData.name,
        email: emailFromData.email,
        message: emailFromData.message,
      }),
    });
    if (error) return { success: false, error };
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};
