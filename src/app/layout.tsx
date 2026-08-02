import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({ 
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "مجید فکرمند | توسعه‌دهنده فول‌استک و متخصص سئو",
  description: "توسعه‌دهنده حرفه‌ای متخصص در ساخت وب‌سایت‌های مدرن، اپلیکیشن، سیستم‌های خودکارسازی و راهکارهای دیجیتال بهینه‌شده برای سئو.",
  keywords: ["برنامه نویس حرفه ای", "طراحی سایت", "طراحی اپلیکیشن", "برنامه نویس پایتون", "طراحی سایت با نکست جی اس", "سئو سایت"],
  authors: [{ name: "Majid Fekrmand" }],
  openGraph: {
    title: "مجید فکرمند | توسعه‌دهنده فول‌استک",
    description: "ساخت وب‌سایت‌های مدرن، اپلیکیشن‌ها و سیستم‌های خودکارسازی.",
    type: "website",
    locale: "fa_IR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="font-sans antialiased bg-deepBlack text-white">
        {children}
      </body>
    </html>
  );
}
