import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className} h-screen`}>
        <Header />
        <div className="min-h-full flex w-full">
          <main className="flex-1">
            {children}
          </main>
        </div>
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
