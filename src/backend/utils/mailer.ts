import { xFetch } from "./x-fetch";

export interface EmailMessage {
  body: {
    name: string;
    intro: string | string [];
    outro: string | string [];
    action?: {
      instructions: string;
      button: {
        text: string;
        link: string;
        color: string;
      };
    };
  };
}

export const sendEmail = async (
  emailMessage: EmailMessage,
  recipientEmail: string,
  subject: string
) => {
  const endpoint = "/connectED/send-email";

  try {
    const requestBody = {
      emailMessage,
      recipientEmail,
      subject,
    };

    const response = await xFetch(endpoint, requestBody);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};