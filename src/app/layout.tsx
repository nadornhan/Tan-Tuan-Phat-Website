import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tantuanphat.com"),
  title: "Nội thất Tân Tuấn Phát",
  description:
    "Cửa hàng nội thất Tân Tuấn Phát tại Buôn Ma Thuột. Chuyên bàn, ghế, kệ tủ, sofa, xích đu.",
  keywords: ["nội thất Buôn Ma Thuột", "bàn ghế", "kệ tủ", "sofa Đắk Lắk"],
  authors: [{ name: "Tan Tuan Phat" }],
  alternates: { canonical: "/" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
