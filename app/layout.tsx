import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import CursorSVG from "@/public/cursor.svg";

const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FrameShare",
  description:
    "FrameShare is a minimalistic design collaboration tool inspired by Figma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout", CursorSVG.src);
  return (
    <html lang="en">
      <body
        className={`${work_sans.className}`}
        style={{
          cursor: `url(${CursorSVG.src}) 0 0, auto`,
        }}
      >
        {children}
      </body>
    </html>
  );
}
