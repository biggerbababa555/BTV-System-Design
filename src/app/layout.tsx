import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const notoSanThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-thai",
});

export const metadata: Metadata = {
  title: "BTV System Design - Boonthavorn Enterprise Design System",
  description: "คู่มือมาตรฐานระบบออกแบบระดับองค์กร (Enterprise Design System Guidelines) รวมโทเค็นสี แบบอักษร เลย์เอาต์ และคอมโพเนนท์อินเทอร์เฟซผู้ใช้สำหรับแพลตฟอร์มบุญถาวร",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${notoSanThai.className} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
