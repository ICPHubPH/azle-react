import Mailgen from "mailgen";
import * as nodemailer from "nodemailer";
import { hasher } from "./hasher";
const link = 'http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943';
const setupTransporterAndMailGen = () => {
    let config = {
        service: "gmail",
        auth: {
            user: process.env.APP_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    };
    let transporter = nodemailer.createTransport(config);
    let mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Whisper",
            link,
        },
    });
    return { transporter, mailGenerator };
};
const sendVerificationLink = async (data) => {
    let { mailGenerator } = setupTransporterAndMailGen();
    const { name, id, token, email } = data;
    const hashedEmail = await hasher(email);
    var emailMessage = {
        body: {
            name,
            intro: `<p style="font-size: 14px; color: #24292e; margin-bottom: 1rem !important;">We are excited to have you join our community. To complete your registration and start exploring all the amazing features Whisper has to offer, please verify your email address by clicking the button below. This link will expire after 5 minutes, please use it accordingly.</p> 
          
          <a style="padding: 0.5rem 1.5rem; color: white; background-color:#3b82f6; text-decoration:none; border-radius: 6px; border: 1px solid #3B82F6; width: max-content;display: block;margin-bottom: 1rem !important;" href="${link}/auth/verify?t=${token}&i=${id}&e=${hashedEmail}" target="_blank">Verify now</a>
          `,
            outro: `<p style="font-size: 14px; color: #24292e; margin-bottom: 1rem !important;">If you have any questions, please feel free to contact me at <a href="mailto:kurtddbigtas@gmail.com">kurtddaniel@gmail.com</a></p>`,
        },
    };
    let mail = mailGenerator.generate(emailMessage);
    let message = {
        from: process.env.nmEMAIL,
        to: email,
        subject: "[ConnectED] Email Verification",
        html: mail,
    };
    try {
        await sendEmail(message);
    }
    catch (err) {
        throw new Error("An error occurred: " + err);
    }
};
const sendEmail = async (message) => {
    try {
        let { transporter } = setupTransporterAndMailGen();
        await transporter.sendMail(message);
    }
    catch (error) {
        throw new Error("Error sending email: " + error);
    }
};
const sendResetPasswordLink = async (data) => {
    let { mailGenerator } = setupTransporterAndMailGen();
    const { name, id, email, token } = data;
    var emailMessage = {
        body: {
            name,
            intro: `<p style="font-size: 14px; color: #24292e; margin-bottom: 1rem !important;">You recently requested a password reset for your account. Please click the button shown below to reset your password. If you don’t use this link within 10 minutes, it will expire. To get a new password reset link, visit: <a href="${link}/auth/forgot_password">${link}/auth/forgot_password</a></p> 
          
          <a style="padding: 0.5rem 1.5rem; color: white; background-color:#3b82f6; text-decoration:none; border-radius: 6px; border: 1px solid #3B82F6; width: max-content;display: block;margin-bottom: 1rem !important;" href="${link}/auth/reset_password/${token}/${id}" target="_blank">Reset Password</a>
  
          `,
            outro: `<p style="font-size: 14px; color: #24292e; margin-bottom: 1rem !important;">If you did not initiate this request or have any concerns, please contact me immediately at <a href="mailto:kurtddbigtas@gmail.com">kurtddaniel@gmail.com</a></p>`,
        },
    };
    let mail = mailGenerator.generate(emailMessage);
    let message = {
        from: process.env.nmEMAIL,
        to: email,
        subject: "[ConnectED] Reset Password",
        html: mail,
    };
    try {
        await sendEmail(message);
    }
    catch (err) {
        throw new Error("An error occurred: " + err);
    }
};
const sendPasswordResetSuccess = async (data) => {
    let { mailGenerator } = setupTransporterAndMailGen();
    const { name, email } = data;
    var emailMessage = {
        body: {
            name,
            intro: `<p style="font-size: 14px; color: #24292e; margin-bottom: 1rem !important;">Your password has been successfully changed. You can now log in to your account with your new password.</p> `,
            outro: `<p style="font-size: 14px; color: #24292e; margin-bottom: 1rem !important;">If you have any questions, please feel free to contact me at <a href="mailto:kurtddbigtas@gmail.com">kurtddaniel@gmail.com</a></p>`,
        },
    };
    let mail = mailGenerator.generate(emailMessage);
    let message = {
        from: process.env.nmEMAIL,
        to: email,
        subject: "[Whisper] Password Changed",
        html: mail,
    };
    try {
        await sendEmail(message);
    }
    catch (err) {
        throw new Error("An error occurred: " + err);
    }
};
export { sendPasswordResetSuccess, sendResetPasswordLink, sendVerificationLink };
