module.exports = (req, res) => {
  // Set proper 404 status
  res.status(404);
  
  // Set headers to prevent indexing
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // Return a minimal HTML that will be replaced by the React app
  // But the crucial part is the 404 status code
  res.send(`<!DOCTYPE html>
<html>
<head>
  <meta name="robots" content="noindex, nofollow">
  <meta http-equiv="refresh" content="0;url=/">
  <title>404 - Page Not Found</title>
</head>
<body>
  <h1>404 - Page Not Found</h1>
  <p>This page does not exist. <a href="/">Return to homepage</a></p>
</body>
</html>`);
};

