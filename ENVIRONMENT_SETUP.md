# Environment Setup for Mavericks Edge Website

## Required Environment Variables

### Email Service Configuration

The contact form requires an email service API key to send notifications. Currently, the system supports two email services:

#### Option 1: Resend (Recommended)
- **Variable**: `RESEND_API_KEY`
- **Description**: API key for Resend email service
- **Setup**: 
  1. Sign up at [resend.com](https://resend.com)
  2. Get your API key from the dashboard
  3. Set the environment variable: `export RESEND_API_KEY=your_api_key_here`

#### Option 2: Nodemailer (Development/Testing)
- **Description**: Uses Ethereal Email for testing
- **Setup**: No API key required, automatically creates test accounts
- **Note**: Only suitable for development/testing, not production

## Current Status

- ✅ **Form Submission**: Contact form submissions are saved to the database
- ✅ **Validation**: Form validation works correctly
- ⚠️ **Email Notifications**: Currently using Nodemailer fallback (test emails only)
- 🔧 **Production Email**: Requires RESEND_API_KEY for production email delivery

## How to Set Up Production Email

1. **Get a Resend API Key**:
   ```bash
   # Sign up at resend.com and get your API key
   export RESEND_API_KEY=re_xxxxxxxxxxxx
   ```

2. **For Vercel Deployment**:
   - Go to your Vercel project dashboard
   - Navigate to Settings > Environment Variables
   - Add `RESEND_API_KEY` with your Resend API key

3. **For Local Development**:
   - Create a `.env` file in the project root
   - Add: `RESEND_API_KEY=your_api_key_here`

## Testing the Contact Form

The contact form will work even without the email API key:
- ✅ Form submissions are saved to the database
- ✅ Users receive success confirmation
- ⚠️ Email notifications may be delayed (using test email service)

## Troubleshooting

### Contact Form Not Working
1. Check browser console for JavaScript errors
2. Check server logs for API errors
3. Verify the `/api/contact` endpoint is accessible

### Email Not Sending
1. Verify `RESEND_API_KEY` is set correctly
2. Check server logs for email service errors
3. For development, check Nodemailer preview URLs in console

### Database Issues
1. Verify `DATABASE_URL` is configured
2. Check database connection
3. Ensure database schema is up to date 