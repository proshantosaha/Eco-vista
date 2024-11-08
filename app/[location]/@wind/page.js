import WindComponent from "@/components/WindComponent";
import React from "react";

const WindPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <WindComponent lat={latitude} lon={longitude} />;
};

export default WindPage;
