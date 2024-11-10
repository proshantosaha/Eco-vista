import NoLocation from "@/components/NoLocation";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLong } from "@/lib/location-info";
import React from "react";

const TemperaturePage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <TemperatureComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocation />;
  }
};

export default TemperaturePage;
