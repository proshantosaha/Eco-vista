import NoLocation from "@/components/NoLocation";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLong } from "@/lib/location-info";
import React from "react";

const WindPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <WindComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocation />;
  }
};

export default WindPage;
