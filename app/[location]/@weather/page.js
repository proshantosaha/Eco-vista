import NoLocation from "@/components/NoLocation";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLong } from "@/lib/location-info";
import React from "react";

const WeatherPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <WeatherComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocation />;
  }
};

export default WeatherPage;
