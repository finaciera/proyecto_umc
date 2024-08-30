import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import {ClerkProvider} from '@clerk/nextjs';
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VENTA DE VEHICULOS",
  description: "Tu Auto sin tanto rollo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en">
      <body className={outfit.className}>
      <NextTopLoader color="0001" />
         
        {children}
        <Toaster/>
        </body>
    </html>
    </ClerkProvider>
  
  );
}
