//layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import { Theme } from "@radix-ui/themes";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import Footer from "@/components/layout/Footer";
import Providers from "@/context/providers/Providers";
// import ParticipateReminder from "@/components/ui/reminders/ParticipateReminder";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import AnalyticsProvider from "@/context/providers/AnalyticsProvider";

const font = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: { default: "IMD", template: "%s | IMD" },
  description: "L’alliance stratégique pour capter les compétences de demain",
  icons: {
    icon: "/favicon-public.ico",
  },
  openGraph: {
    type: "website",
    url: "https://forumemploi.ma",
    title: "IMD",
    description:
      "Le rendez-vous majeur de l’agriculture intelligente et de la gestion durable de l’eau.",
    siteName: "IMD",
    images: [
      {
        url: "https://forumemploi.ma/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMD",
      },
    ],
  },
  metadataBase: new URL("https://forumemploi.ma"),
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMD",
    description:
      "Le rendez-vous majeur de l’agriculture intelligente et de la gestion durable de l’eau.",
    images: ["https://forumemploi.ma/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${font.variable} antialiased bg-background relative`}>
        <Providers>
          <NextTopLoader
            color="#fff"
            height={3}
            showSpinner={false}
            easing="ease"
            speed={200}
          />
          <Theme>
            <Header />
            {children}
            <Footer />
          </Theme>
          {/* <ParticipateReminder/> */}
          <Toaster />
          <AnalyticsProvider />
        </Providers>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HYSCLTPMY9"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-HYSCLTPMY9');
    `}
        </Script>
      </body>
    </html>
  );
}
