import { Footer, MobileHeader, WebHeader } from "@/components";
import { Fredoka } from "next/font/google";

import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata = {
  title: "Blog website",
  description: "Create a blog website with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <WebHeader />
        <MobileHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
