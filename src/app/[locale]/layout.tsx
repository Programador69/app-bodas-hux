import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import {FacebookPixel } from "../componentes";

const montserrat = localFont({
  src: "../fonts/Montserrat-Regular.ttf",
  display: "swap",
  variable: "--font-montserrat",
})

const dancing = localFont({
  src: "../fonts/DancingScript-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-dancing",
})

const rocknroll = localFont({
  src: "../fonts/RocknRollOne-Regular.ttf",
  display: "swap",
  variable: "--font-rocknroll",
})

export const metadata: Metadata = {
  title: "Bodas Huatulco",
  description: "Calcula el sueño de tu boda con Bodas Huatulco",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} ${dancing.variable} ${rocknroll.variable}`}>
        <NextIntlClientProvider>
          {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && <FacebookPixel />}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
