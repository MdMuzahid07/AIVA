import type { Metadata } from "next";
// import { Manrope } from "next/font/google";
import "./globals.css";

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
//   variable: "--font-manrope",
// });


export const metadata: Metadata = {
  title: "AIVA",
  description: "AIVA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}