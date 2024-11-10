import AQIComponent from "@/components/AQIComponent";
import NoLocation from "@/components/NoLocation";
import { getResolvedLatLong } from "@/lib/location-info";
import React from "react";

const AQIPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <AQIComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocation />;
  }
};

export default AQIPage;
