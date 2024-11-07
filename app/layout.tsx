import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const font = Kode_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Wolfman Repairs",
  description: "Reviving Retro, One Console at a Time!!",
  metadataBase: new URL('https://wolfmanrepairs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: ["/icons/logo.webp"],
  },
  keywords: ['Wolfman', 'Repairs', 'Retro', 'Console', 'Games', 'Videos', 'Tools'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={font.className + " scroll-smooth"} lang="en">
      {/* TODO: Make attributions page for https://heropatterns.com/ */}
      <body className="flex text-white bg-green-900 bg-repeat bg-[url('/circuit-board.svg')]">
        <div className="container mx-auto sm:px-4 md:px-8 lg:px-16 xl:px-32">
          <div className="shadow-lg shadow-black">
            <NavBar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
      <GoogleAnalytics gaId="G-0DEBVJY5S5" />
    </html>
  );
}
