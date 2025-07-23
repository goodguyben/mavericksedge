module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Simple API response
  if (req.url === '/api/health') {
    res.status(200).json({ status: 'ok', message: 'Server is running' });
    return;
  }

  // Default response for any API route
  res.status(404).json({ error: 'API endpoint not found' });
}; 