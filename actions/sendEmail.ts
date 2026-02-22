"use server"

import React from "react"
import { Resend } from "resend"
import ContactFormEmail from "@/email/contact-form-email"
import { getErrorMessage, validateString } from "@/lib/utils"

const resend = new Resend(process.env.SENDGRID_API_KEY)

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get("senderEmail")
	const message = formData.get("message")

	console.log(senderEmail)

	if (!validateString(senderEmail, 500)) {
		return {
			error: "Invalid sender email",
		}
	}

	if (!validateString(message, 5000)) {
		return {
			error: "Invalid message",
		}
	}

	try {
		const data = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: "pricew86@gmail.com",
			subject: "Hello from Resend",
			replyTo: senderEmail as string,
			react: React.createElement(ContactFormEmail, {
				senderEmail: senderEmail as string,
				message: message as string,
			}),
		})
		return { data }
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		}
	}
}
