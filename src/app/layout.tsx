import type { Metadata } from "next";
import localFont from "next/font/local";
import './globals.css';
import "animate.css"
import AppLayout from "@/components/layouts/AppLayout";
import ErrorBoundary from "@/components/errorBoundary";
import Head from "next/head";

const Monteserrat = localFont({
  src: "./fonts/Monteserrat/Montserrat_Bold_700.ttf",
  variable: "--font-monteserrat",
  weight: "700",
});

const OpenSans = localFont({
  src: "./fonts/OpenSans/OpenSansLight300.ttf",
  variable: "--font-openSans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Òduyémi | Fullstack Developer",
  description: "I turn ideas into real-life products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <body
        className={`${Monteserrat.variable} ${OpenSans.variable} font-openSans`}
      >
        <ErrorBoundary>
          <AppLayout attribute="class" defaultTheme="light" enableSystem>
            {children}
          </AppLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}
