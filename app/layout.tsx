import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ModEX | Financial Modeling & Strategic Finance",
  description:
    "Build practical financial modeling capability or develop decision-ready financial solutions with ModEX in Arabic and English.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
