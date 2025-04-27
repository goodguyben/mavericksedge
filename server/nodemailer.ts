import nodemailer from 'nodemailer';

// Create a test account for development/testing
let testAccount: nodemailer.TestAccount | null = null;
let transporter: nodemailer.Transporter | null = null;

// Initialize nodemailer with test account if needed
async function initializeNodemailer() {
  try {
    // Create test account if one doesn't exist yet
    if (!testAccount) {
      console.log('Creating a test email account...');
      testAccount = await nodemailer.createTestAccount();
      console.log('Test email account created:', testAccount.user);
      
      // Create a reusable transporter object using the test account
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
      
      console.log('Nodemailer transporter initialized');
    }
    
    return { testAccount, transporter };
  } catch (error) {
    console.error('Failed to initialize nodemailer:', error);
    throw error;
  }
}

/**
 * Sends an email using nodemailer
 * @param to Recipient email address
 * @param subject Email subject
 * @param text Plain text email content
 * @param html HTML email content (optional)
 * @returns Promise with the result of the send operation
 */
export async function sendEmailWithNodemailer(
  to: string,
  subject: string,
  text: string,
  html?: string
) {
  try {
    console.log('Attempting to send email with Nodemailer...');
    
    // Make sure we're initialized
    const { transporter } = await initializeNodemailer();
    
    if (!transporter) {
      throw new Error('Nodemailer transporter not initialized');
    }
    
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Mavericks Edge Website" <website@mavericksedge.ca>',
      to,
      subject,
      text,
      html: html || text,
      replyTo: 'info@mavericksedge.ca'
    });
    
    console.log('Email sent successfully:', {
      messageId: info.messageId,
      previewURL: nodemailer.getTestMessageUrl(info)
    });
    
    // Log the preview URL which is useful for development and testing
    const previewURL = nodemailer.getTestMessageUrl(info);
    console.log('Preview URL:', previewURL);
    
    return { 
      success: true, 
      messageId: info.messageId,
      previewURL
    };
  } catch (error) {
    console.error('Failed to send email with nodemailer:', error);
    throw error;
  }
}