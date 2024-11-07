import { getWindData } from "@/lib/weather-info";
import React from "react";
import Card from "./Card";

const WindComponent = () => {
  getWindData;
  return (
    <Card>
      {" "}
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <img
          className="max-w-20"
          src="/icon_wind.png"
          alt="rain icon"
          width={80}
          height={80}
        />
        <h3 className="feature-title">Rain</h3>
        <span className="feature-name">Moderate Rain</span>
      </div>
    </Card>
  );
};

export default WindComponent;
