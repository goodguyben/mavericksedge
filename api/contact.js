import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, service, message, phone } = req.body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, service, message' 
      });
    }

    // Format email content
    const serviceMap = {
      'web-development': 'Web Development',
      'marketing': 'Marketing & Creative Services',
      'ai-integration': 'AI Integration',
      'other': 'Other Services'
    };

    const serviceName = serviceMap[service] || service;
    const subject = 'New Contact Form Submission - Mavericks Edge Website';
    
    const text = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}Service: ${serviceName}
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
    .header { background: #FF5630; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #FF5630; }
    .message { background: white; padding: 15px; border-left: 4px solid #FF5630; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span> ${name}
      </div>
      <div class="field">
        <span class="label">Email:</span> ${email}
      </div>
      ${phone ? `<div class="field"><span class="label">Phone:</span> ${phone}</div>` : ''}
      <div class="field">
        <span class="label">Service:</span> ${serviceName}
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <div class="message">${message.replace(/\n/g, '<br>')}</div>
      </div>
      <p><em>This message was sent from the Mavericks Edge website contact form.</em></p>
    </div>
  </div>
</body>
</html>
`;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'bezal.john@gmail.com',
      subject,
      text,
      html,
      replyTo: email
    });

    if (error) {
      console.error('Email sending error:', error);
      return res.status(500).json({ 
        error: 'Failed to send email',
        details: error.message 
      });
    }

    console.log('Email sent successfully:', data.id);
    
    return res.status(201).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      messageId: data.id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'A server error has occurred',
      details: error.message 
    });
  }
}
