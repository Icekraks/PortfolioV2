import { ActionFunctionArgs } from "@remix-run/node";
import "dotenv/config";

export async function action({ request }: ActionFunctionArgs) {
  const [formData] = await Promise.all([request.formData()]);
  const lat = formData.get("lat");
  const lon = formData.get("lon");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    return {
      ...data,
    };
  } catch (error) {
    console.error(error);
  }

  return {};
}
