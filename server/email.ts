import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends an email using the Resend service
 * @param to Recipient email address
 * @param subject Email subject
 * @param text Plain text email content
 * @param html HTML email content (optional)
 * @returns Promise with the result of the send operation
 */
export async function sendEmail(
  to: string,
  subject: string,
  text: string,
  html?: string
) {
  try {
    // Send the email
    const { data, error } = await resend.emails.send({
      from: 'website@mavericks-edge.replit.app', // Default sender email
      to,
      subject,
      text,
      html: html || text,
    });

    if (error) {
      console.error('Email sending error:', error);
      throw new Error(error.message);
    }

    return { success: true, messageId: data?.id };
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}

/**
 * Format contact form submission into an email body
 * @param name Name of the sender
 * @param email Email of the sender
 * @param service Service the sender is interested in
 * @param message Message from the sender
 * @returns Object containing text and HTML versions of the email
 */
export function formatContactEmail(
  name: string,
  email: string,
  service: string,
  message: string
) {
  const serviceMap: { [key: string]: string } = {
    'web-development': 'Web Development',
    'marketing': 'Marketing & Creative Services',
    'ai-integration': 'AI Integration',
    'other': 'Other Services'
  };

  const serviceName = serviceMap[service] || service;

  // Plain text version
  const text = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Service: ${serviceName}
Message:
${message}

This message was sent from the Mavericks Edge website contact form.
`;

  // HTML version
  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1A1A1A; color: #ff8a00; padding: 20px; border-radius: 5px 5px 0 0; }
    .content { background-color: #f8f8f8; padding: 20px; border-radius: 0 0 5px 5px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; }
    .message { white-space: pre-line; background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #ff8a00; }
    .footer { margin-top: 20px; font-size: 12px; color: #666; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span> ${name}
      </div>
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
      </div>
      <div class="field">
        <span class="label">Service:</span> ${serviceName}
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <div class="message">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      This message was sent from the Mavericks Edge website contact form.
    </div>
  </div>
</body>
</html>
`;

  return { text, html };
}