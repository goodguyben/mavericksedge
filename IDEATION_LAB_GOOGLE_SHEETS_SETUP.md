# Ideation Lab Google Sheets Integration Setup

This guide will help you set up Google Sheets to automatically store all user selections from the Ideation Lab.

## What Data Gets Stored

The system captures:
- **Board ID** - Unique identifier for each submission
- **Timestamp** - When the submission was made
- **URL** - Shareable link to the board
- **Design Inspiration** - Selected website designs and notes
- **Component Selections** - All selected components by category:
  - Navigation Menu
  - Hero
  - Buttons
  - Carousel
  - Text Animations
- **Skipped Categories** - Which categories the user chose to skip

## Setup Steps

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Ideation Lab Submissions" (or any name you prefer)
4. Keep this tab open

### 2. Deploy the Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any default code
3. Copy the entire contents of `google-apps-script/ideation-lab-webhook.js`
4. Paste it into the Apps Script editor
5. **IMPORTANT**: Update line 15 to set your shared secret:
   ```javascript
   const SHARED_SECRET = "your-secure-random-string-here";
   ```
   Generate a secure random string (e.g., use a password generator)

6. Click the **Deploy** button (top right)
7. Select **New deployment**
8. Click the gear icon ⚙️ next to "Select type"
9. Choose **Web app**
10. Configure:
    - **Description**: Ideation Lab Webhook
    - **Execute as**: Me
    - **Who has access**: Anyone
11. Click **Deploy**
12. **Copy the Web app URL** - it will look like:
    ```
    https://script.google.com/macros/s/AKfycby.../exec
    ```

### 3. Update Environment Variables

Add these to your `.env` file:

```bash
# Google Sheets Webhook for Ideation Lab
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
IDEATION_SHARED_SECRET=your-secure-random-string-here
```

**IMPORTANT**: The `IDEATION_SHARED_SECRET` must match exactly what you set in the Google Apps Script.

### 4. Restart Your Development Server

```bash
npm run dev -- --port 3000
```

## Testing

1. Go to the Ideation Lab
2. Make some selections
3. Submit the form
4. Check your Google Sheet - you should see two new sheets:
   - **Submissions** - Main board data with all selections
   - **Items** - Individual item details (one row per selected component)

## Sheet Structure

### Submissions Sheet
| Timestamp | Board ID | URL | Design Inspiration Sites | Design Inspiration Notes | Navigation Menu | Hero | Buttons | Carousel | Text Animations | Skipped Categories |
|-----------|----------|-----|-------------------------|-------------------------|-----------------|------|---------|----------|-----------------|-------------------|

### Items Sheet
| Timestamp | Board ID | Item ID | Priority |
|-----------|----------|---------|----------|

## Troubleshooting

### "Submission failed" error
- Check that the webhook URL is correct in `.env`
- Verify the shared secret matches in both `.env` and Apps Script
- Check the browser console for detailed error messages
- Check the Apps Script execution logs (View > Executions)

### Data not appearing in Google Sheets
- Verify the Apps Script is deployed as a Web App
- Check that "Who has access" is set to "Anyone"
- Look at the server console logs - it will show if Google Sheets integration succeeded

### Development Mode
If `GOOGLE_SHEETS_WEBHOOK_URL` is not configured, the system will:
- Still accept submissions (won't fail)
- Log all data to the server console
- Return success to the user

This allows development without Google Sheets setup.

