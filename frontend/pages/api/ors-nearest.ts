import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lng, lat } = req.query;
  const apiKey = process.env.NEXT_PUBLIC_ORS_API_KEY;
  const url = `https://api.openrouteservice.org/v2/nearest/driving-car?api_key=${apiKey}&point=${lng},${lat}`;
  const orsRes = await fetch(url as string);
  const data = await orsRes.json();
  res.status(orsRes.status).json(data);
} 