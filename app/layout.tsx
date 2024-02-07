import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import "./globals.css";
import Footer from "@/components/footer";

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
        <main className='max-w-6xl mx-auto'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
