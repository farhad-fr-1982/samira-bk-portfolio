import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrolToTop";

const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
  display: "swap",
});

const siteUrl = "https://samira-bk-artportfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "سمیرا بصیری کیا | نقاش، خطاط و مدرس خوشنویسی در تهران",
    template: "%s | سمیرا بصیری کیا",
  },

  description:
    "سمیرا بصیری کیا، نقاش و خوشنویس و مدرس خوشنویسی در تهران با ۲۵ سال سابقه در هنرهای تجسمی، نقاشی رئال، خوشنویسی و تذهیب.",

  keywords: [
    "سمیرا بصیری کیا",
    "سمیرا بصیری‌کیا",
    "نقاشی",
    "نقاشی رئال",
    "خوشنویسی",
    "خطاطی",
    "تذهیب",
    "مدرس خوشنویسی",
    "مدرس خوشنویسی تهران",
    "نقاش تهران",
    "خطاط تهران",
    "هنرمند ایرانی",
  ],

  authors: [
    {
      name: "سمیرا بصیری کیا",
      url: siteUrl,
    },
  ],

  creator: "سمیرا بصیری کیا",
  publisher: "سمیرا بصیری کیا",

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,

    title: "سمیرا بصیری کیا | نقاش، خطاط و مدرس خوشنویسی",

    description:
      "نقاش سبک رئال، خطاط و مدرس خوشنویسی با ۲۵ سال سابقه در هنرهای تجسمی و برگزاری نمایشگاه‌های انفرادی و گروهی.",

    siteName: "سمیرا بصیری کیا",

    images: [
      {
        url: "/images/f.png",
        width: 1200,
        height: 630,
        alt: "سمیرا بصیری کیا | نقاش و خطاط",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "سمیرا بصیری کیا | نقاش و خطاط",

    description:
      "نقاش سبک رئال، خطاط و مدرس خوشنویسی با ۲۵ سال سابقه فعالیت در هنرهای تجسمی.",

    images: ["/images/f.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  verification: {
    google: "GGnpcobZ4JLmCOjAYINONAyastq92OmSjTXnFUN1eJE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.variable} antialiased bg-[#28286b]`}>
        <ResponsiveNav />

        {children}

        <Footer />

        <ScrollToTop />
      </body>
    </html>
  );
}