import Image from "next/image";
import { getAQIData } from "../lib/weather-info";
import Card from "./Card";

const AQIComponent = async ({ lat, lon }) => {
  const { main, components } = await getAQIData(lat, lon);

  console.log(main, components);

  const getAQIRating = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very poor";

      default:
        return "unknown";
    }
  };

  return (
    <Card>
      <h6 class="feature-name">Air Pollution & Quality</h6>
      <div className="mt-3 space-y-2 lg:space-y-3">
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              width={500}
              height={500}
            />
            Air Quality Index
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {getAQIRating(main?.aqi)}
          </span>
        </div>
        {/* <!-- item ends -->
  <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              width={500}
              height={500}
            />
            Carbon Monoxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            201.94 µg/m³
          </span>
        </div>
        {/* <!-- item ends -->
  <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              width={500}
              height={500}
            />
            Nitric Oxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            0.01877 ppm
          </span>
        </div>
        {/* <!-- item ends -->
  <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              width={500}
              height={500}
            />
            Nitrogen Dioxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            0.7711 ppm
          </span>
        </div>
        {/* <!-- item ends -->
  <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              width={500}
              height={500}
            />
            Ozone
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            68.664 µg/m³
          </span>
        </div>
        {/* <!-- item ends -->
  <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              width={500}
              height={500}
            />
            Sulfur Dioxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            0.6407 ppm
          </span>
        </div>
        {/* <!-- item ends -->
  <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icon_air_element.png"
              alt="icon"
              width={500}
              height={500}
            />
            PM2.5
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            0.5 µg/m³
          </span>
        </div>
        {/* <!-- item ends --> */}
      </div>
    </Card>
  );
};

export default AQIComponent;
