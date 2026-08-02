import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ModEX Learning Hub",
  description: "The ModEX learning, cohort, lesson, and resource platform.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
