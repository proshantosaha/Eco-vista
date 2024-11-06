import { getAQIData } from "../lib/weather-info";
import Card from "./Card";

const AQIComponent = async ({ lat, lon }) => {
  const { main, components } = await getAQIData(lat, lon);

  console.log(main, components);

  return <Card></Card>;
};

export default AQIComponent;
