import Image from "next/image";
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
      <Image
        src="/background.png"
        className="bg-img"
        width={700}
        height={1200}
        alt="background"
      />

      <div className="overlay"></div>

      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {temperature}
            {wind}
          </div>
        </div>
      </main>
    </div>
  );
}
