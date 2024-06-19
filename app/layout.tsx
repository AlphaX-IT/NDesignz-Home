import type { Metadata } from "next";
import { Merienda } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const merienda = Merienda({ subsets: ["latin"], display:"swap" });

export const metadata: Metadata = {
  title: "NDesignz - Your Interior Pro",
  description: "NDesignz - Your Interior Pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merienda.className} bg-black`}>
        <Navbar />
        <div className="min-h-screen w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
