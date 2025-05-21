import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const montserrat = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  display: "swap",
  variable: "--font-montserrat",
})

const dancing = localFont({
  src: "./fonts/DancingScript-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-dancing",
})

const rocknroll = localFont({
  src: "./fonts/RocknRollOne-Regular.ttf",
  display: "swap",
  variable: "--font-rocknroll",
})

export const metadata: Metadata = {
  title: "Bodas Huatulco",
  description: "Formulario sencillo para obtener cotizaciones de bodas en Huatulco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${dancing.variable} ${rocknroll.variable}`}>
        {children}
      </body>
    </html>
  );
}
