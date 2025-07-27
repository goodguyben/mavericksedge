import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    console.log('Contact form submission received:', req.body);
    
    // Validate required fields
    const { name, email, service, message, phone } = req.body;
    
    if (!name || !email || !service || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    // Format the email content
    const text = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}Service: ${service}
Message:
${message}

This message was sent from the Mavericks Edge website contact form.
`;

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
      ${phone ? `
      <div class="field">
        <span class="label">Phone:</span> ${phone}
      </div>
      ` : ''}
      <div class="field">
        <span class="label">Service:</span> ${service}
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

    // Send email using Resend
    try {
      console.log('Attempting to send email with Resend...');
      console.log('API Key present:', !!process.env.RESEND_API_KEY);
      
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'bezal.john@gmail.com',
        subject: 'New Contact Form Submission - Mavericks Edge Website',
        text,
        html,
        replyTo: 'info@mavericksedge.ca'
      });

      if (error) {
        console.error('Resend error:', error);
        throw new Error(error.message);
      }

      console.log('Email sent successfully:', data);
      
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your message! We will get back to you soon." 
      });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      
      // Still return success to user, but log the error
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your message! We will get back to you soon." 
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: "An error occurred while processing your request. Please try again later." 
    });
  }
} 