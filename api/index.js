export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Health
  if (req.url === '/api/health') {
    res.status(200).json({ status: 'ok', message: 'Server is running' });
    return;
  }

  // Ideation Lab API endpoints
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;
  const method = req.method || 'GET';
  const WEBHOOK = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const SECRET = process.env.IDEATION_SHARED_SECRET;

  // Handle POST requests with body parsing
  const handlePost = async () => {
    return new Promise((resolve) => {
      const chunks = [];
      req.on('data', (c) => chunks.push(c));
      req.on('end', async () => {
        try {
          const bodyRaw = Buffer.concat(chunks).toString('utf8') || '{}';
          let payload;
          try { 
            payload = JSON.parse(bodyRaw); 
          } catch (parseError) { 
            console.error('JSON parse error:', parseError);
            payload = {}; 
          }

          console.log('Received payload:', { 
            boardId: payload.boardId, 
            hasSelections: !!payload.selectedByCategory,
            hasItems: !!payload.items
          });

          // Add secret to payload
          payload.secret = SECRET;

          // If webhook is configured, send to Google Sheets
          if (WEBHOOK && SECRET) {
            try {
              console.log('Sending to Google Sheets webhook...');
              const response = await fetch(WEBHOOK, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
              });
              
              const responseText = await response.text();
              console.log('Webhook response:', response.status, responseText);
              
              if (!response.ok) {
                console.error('Google Sheets webhook error:', response.status, responseText);
              } else {
                console.log('Successfully saved to Google Sheets');
              }
            } catch (error) {
              console.error('Error sending to Google Sheets:', error);
              // Continue anyway - don't fail the request
            }
          } else {
            console.log('Google Sheets webhook not configured - WEBHOOK:', !!WEBHOOK, 'SECRET:', !!SECRET);
          }

          // Always return success
          resolve({
            success: true,
            boardId: payload.boardId || 'unknown'
          });
        } catch (error) {
          console.error('Error in handlePost:', error);
          resolve({
            success: false,
            error: error.toString()
          });
        }
      });
    });
  };

  if (path === '/api/ideation/boards/upsert' && method === 'POST') {
    try {
      const result = await handlePost();
      res.status(result.success ? 200 : 500);
      res.json(result);
    } catch (error) {
      console.error('Error in upsert handler:', error);
      res.status(500).json({ success: false, error: error.toString() });
    }
    return;
  }

  if (path === '/api/ideation/boards/items/bulk' && method === 'POST') {
    try {
      const result = await handlePost();
      res.status(result.success ? 200 : 500);
      res.json(result);
    } catch (error) {
      console.error('Error in bulk items handler:', error);
      res.status(500).json({ success: false, error: error.toString() });
    }
    return;
  }

  if (path.startsWith('/api/ideation/boards/') && method === 'GET') {
    res.json({ 
      success: true, 
      boardId: path.split('/').pop(),
      selections: {}
    });
    return;
  }

  // Default response for any API route
  res.status(404).json({ error: 'API endpoint not found' });
}