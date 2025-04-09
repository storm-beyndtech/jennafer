import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

type mailOpt = {
	from: string;
	to: string;
	subject: string;
	html: string;
};

const transporter = nodemailer.createTransport({
	pool: true,
	host: "mail.privateemail.com",
	port: 465,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASSWORD,
	},
	secure: true,
	tls: {
		rejectUnauthorized: false,
	},
});

export const verifyTransporter = async (retries = 3, delay = 5000) => {
	console.log(process.env.SMTP_PASSWORD, process.env.SMTP_USER);
	for (let attempt = 1; attempt <= retries; attempt++) {
		try {
			await transporter.verify();
			console.log("Transporter Verified");
			return;
		} catch (error) {
			console.error(
				`Transporter verification failed on attempt ${attempt}`,
				error instanceof Error && error.message,
			);

			if (attempt < retries) {
				console.log(`Retrying in ${delay / 1000} seconds...`);
				await new Promise((resolve) => setTimeout(resolve, delay));
			} else {
				console.error("All attempts to verify transporter failed. Exiting...");
			}
		}
	}
};

const sendMail = (mailData: mailOpt) => {
	return new Promise((resolve, reject) => {
		transporter.sendMail(mailData, (err, info) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				console.log(info);
				resolve(info);
			}
		});
	});
};

export async function POST(req: NextRequest) {
	const { name, country, email, phone, message } = await req.json();

	try {
		await verifyTransporter();

		const mailData = {
			from: `${process.env.SMTP_USER}`,
			to: `${process.env.SMTP_USER}`,
			subject: "Contact Message!",
			html: `
<table role="presentation" width="100%" bgcolor="#f9f9f9" style="padding: 20px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" max-width="600px" bgcolor="#ffffff" style="border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
            <tr>
              <td align="center" style="padding: 20px; background: #13160F;">
                <img src="https://www.jennaferbeaverturner.com/logo.png" width="120" alt="Company Logo" style="display: block;">
              </td>
            </tr>

            <!-- Body Content -->
            <tr>
              <td style="padding: 20px; line-height: 1.8;">
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Country: ${country}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td align="center" style="padding: 20px; background: #13160F; color: #fafafa; font-size: 12px;">
                © 2015 Jennafer Turner | All Rights Reserved
              </td>
            </tr>
          </table>
      `,
		};

		// Send mail
		await sendMail(mailData);

		return new Response(JSON.stringify({ status: "ok" }));
	} catch (error) {
		return Response.json({ error: "An error occurred while sending the email" }, { status: 500 });
	}
}
