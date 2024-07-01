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
    <html lang="en">
      {/* TODO: Make attributions page for https://heropatterns.com/ */}
      <body className={inter.className + "flex text-black dark:text-white bg-green-700 dark:bg-green-900 bg-repeat bg-[url('/test-website-2/circuit-board.svg')]"}>
        <div className="md:container mx-auto bg-white dark:bg-neutral-900 shadow-lg shadow-black">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
