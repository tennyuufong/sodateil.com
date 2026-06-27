import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ソダテイル教室｜放課後等デイサービス",
  description:
    "ソダテイル教室は、放課後等デイサービスを提供する児童発達支援施設です。お子さま一人ひとりに寄り添い、見学・ご相談を受け付けています。",
  openGraph: {
    title: "ソダテイル教室｜放課後等デイサービス",
    description:
      "ソダテイル教室は、放課後等デイサービスを提供する児童発達支援施設です。見学・ご相談を受け付けています。",
    images: ["/images/classroom-hero.jpg"],
    locale: "ja_JP",
    type: "website"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
