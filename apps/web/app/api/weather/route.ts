import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const { lat, lon } = body as { lat?: string; lon?: string };

  const apiKey = process.env.WEATHER_API_KEY;
  if (!apiKey) {
    console.warn("WEATHER_API_KEY is not defined");
    return NextResponse.json(null);
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );

    if (!response.ok) throw new Error(`OpenWeather error: ${response.status}`);

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(null);
  }
}
