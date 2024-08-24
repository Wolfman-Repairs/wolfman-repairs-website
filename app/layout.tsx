import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import HeroBanner from "./components/hero-banner/hero-banner";

const font = Kode_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Wolfman Repairs",
  description: "Reviving Retro, One Console at a Time!!",
  openGraph: {
    images: ["https://wolfman-repairs.github.io/wolfman-repairs-website/logo.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={font.className + " scroll-smooth"} lang="en">
      {/* TODO: Make attributions page for https://heropatterns.com/ */}
      <body className="flex text-white bg-green-900 bg-repeat bg-[url('/wolfman-repairs-website/circuit-board.svg')]">
        <div className="container mx-auto shadow-lg shadow-black">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
