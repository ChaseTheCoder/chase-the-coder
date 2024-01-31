import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chase the Coder",
  description: "Chase Sheaff's Software Engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        <main className='max-w-6xl mx-6 md:mx-10 lg:mx-auto'>
          {children}
        </main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
