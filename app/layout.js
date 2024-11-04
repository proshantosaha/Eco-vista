import "./globals.css";

export const metadata = {
  title: "next ecovista",
  description: "Eco information ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
