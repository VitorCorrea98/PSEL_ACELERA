import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PSel Acelera",
  description: "Projeto acelera PSel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
