import "../globals.css";

export const metadata = {
  title: "next ecovista",
  description: "Eco information ",
};

export default function RootLayout({
  children,
  aqi,
  temperature,
  weather,
  wind,
}) {
  return (
    <div className="wrapper">
      {children}
      {weather}
      {aqi}
      {temperature}
      {wind}
    </div>
  );
}
