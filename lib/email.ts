"use server"

import { z } from "zod"
import { formSchema } from "./schemas"
import { Resend } from "resend"
import { EmailTemplate } from "@/components/ui/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const { error } = await resend.emails.send({
      from: `${emailFormData.name} <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: "Reaching out form Portfolio",
      react: EmailTemplate({
        name: emailFormData.name,
        email: emailFormData.email,
        message: emailFormData.message,
      }),
    })

    if (error) {
      throw error
    }
  } catch (e) {
    throw e
  }
}
