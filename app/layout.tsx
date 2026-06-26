import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "児童発達支援・放課後等デイサービス｜施設名",
  description:
    "お子さま一人ひとりの発達段階や個性に合わせた支援を行う児童発達支援・放課後等デイサービス施設です。見学・ご相談を受け付けています。",
  openGraph: {
    title: "児童発達支援・放課後等デイサービス｜施設名",
    description:
      "お子さま一人ひとりの発達段階や個性に合わせた支援を行う児童発達支援・放課後等デイサービス施設です。見学・ご相談を受け付けています。",
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
