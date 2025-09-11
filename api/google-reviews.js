export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY || process.env.GOOGLE_API_KEY;

    if (!placeId || !apiKey) {
      res.status(500).json({ success: false, message: 'Missing GOOGLE_PLACE_ID or GOOGLE_MAPS_API_KEY in environment.' });
      return;
    }

    const fields = [
      'rating',
      'user_ratings_total',
      'reviews',
      'name',
      'url'
    ].join('%2C');

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=${fields}&reviews_sort=newest&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok || data.status !== 'OK') {
      res.status(502).json({ success: false, message: 'Failed to fetch Google reviews', details: data });
      return;
    }

    const result = data.result || {};
    const reviews = Array.isArray(result.reviews) ? result.reviews.map((r) => ({
      authorName: r.author_name,
      profilePhotoUrl: r.profile_photo_url,
      rating: r.rating,
      text: r.text,
      time: r.time,
      relativeTimeDescription: r.relative_time_description,
      authorUrl: r.author_url,
    })) : [];

    res.status(200).json({
      success: true,
      name: result.name,
      url: result.url,
      rating: result.rating,
      userRatingsTotal: result.user_ratings_total,
      reviews
    });
  } catch (error) {
    console.error('Google reviews function error:', error);
    res.status(500).json({ success: false, message: 'Internal error fetching Google reviews' });
  }
}


