import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "LA 2028",
  description: "Athlete scouting-style analytics for LA 2028 Paralympic Games"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main className="container py-8">{children}</main>
      </body>
    </html>
  );
}
