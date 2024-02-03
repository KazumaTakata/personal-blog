import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSans = Noto_Sans_JP({subsets: ["latin"]});

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
    <html lang="ja">
      <body className={notoSans.className}>
        <Header></Header> 
        {children}
        <Footer></Footer> 
        </body>
    </html>
  );
}

function Header() {
  return (
    <header>this is header</header>
  );
}

function Footer() {
  return (
    <footer>this is footer</footer>
  );
}

