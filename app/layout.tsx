import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Ekovus",
  description: "Ekovus site"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-xl font-semibold">EKOVUS</Link>
          <nav className="flex gap-6 text-sm opacity-90">
            <Link href="/about">About</Link>
            <Link href="/epk">EPK</Link>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-6 pb-16">{children}</main>
        <footer className="mx-auto max-w-5xl px-6 py-10 text-sm opacity-70">© {new Date().getFullYear()} Ekovus</footer>
      </body>
    </html>
  );
}