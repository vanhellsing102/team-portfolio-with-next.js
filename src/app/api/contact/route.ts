import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: NextRequest){
    try {
        const body = await req.json();
        const {name, email, contactEmail, message} = body;
        // console.log(name, email, contactEmail, contactEmail);
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: contactEmail,
                pass: process.env.NEXT_PUBLIC_MURAD_GOOGLE_PASS
            }
        })
        await transporter.sendMail({
            from: email,
            to: contactEmail,
            subject: `Message from ${name}`,
            text: message,
            html: `<p>${message}</p>`
        })
        return NextResponse.json({message: "Message send successfully!!!"}, {status: 200})
    } catch (error) {
        console.log(error);
    }
}