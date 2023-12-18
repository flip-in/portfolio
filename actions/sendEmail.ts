'use server';

import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.SENDGRID_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  console.log(senderEmail)

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    }
  }

  if(!validateString(message, 5000)){
    return {
      error: "Invalid message"
    }
  }
  let data;

  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'pricew86@gmail.com',
      subject: 'Hello from Resend',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        senderEmail: senderEmail as string,
        message: message as string,
      })
    })
  } catch (error: unknown) {
      return {
        error: getErrorMessage(error)
      }
  }
  return {
    data
  }

};