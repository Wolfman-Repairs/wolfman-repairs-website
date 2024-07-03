import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wolfman Repairs",
  description: "Reviving Retro, One Console at a Time!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      {/* TODO: Make attributions page for https://heropatterns.com/ */}
      <body className={inter.className + "flex text-white bg-green-900 bg-repeat bg-[url('/wolfman-repairs-website/circuit-board.svg')]"}>
        <div className="md:container mx-auto bg-neutral-900 shadow-lg shadow-black">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
