import { getLocationByName } from "../location-util";

export async function GET() {
  const locationData = getLocationByName();
  return Response.json(locationData);
}
