import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
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
        <footer className='flex justify-between max-w-6xl mx-6 md:mx-10 lg:mx-auto'>
          {/* <p>Chase The Coder</p>
          <div className='flex gap-8'>
            <FontAwesomeIcon icon={faLinkedin} size='2xl' className='text-green-600'/>
            <FontAwesomeIcon icon={faGithub} size='2xl' className='text-green-600' />
          </div> */}
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0" />
            <span className="absolute px-3 -translate-x-1/2 left-1/2">Chase The Coder</span>
        </div>
        </footer>
      </body>
    </html>
  );
}
