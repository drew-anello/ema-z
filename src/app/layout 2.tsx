import "./globals.css";
import Nav from "./components/Nav";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ema Zivkovic",
  description: "Actor and Choreographer based in NYC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {<Nav />}
        {children}
      </body>
    </html>
  );
}
