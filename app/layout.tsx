// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Study Tool",
  description: "AI study assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        <header className="border-b border-slate-800">
          <nav className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4">
            <Link href="/" className="text-sm font-semibold">
              AI Study Tool
            </Link>
            <div className="space-x-3 text-xs">
              <Link href="/dashboard" className="hover:text-emerald-400">
                Dashboard
              </Link>
            </div>
          </nav>
        </header>
        <div className="mx-auto max-w-5xl px-4 py-4">{children}</div>
      </body>
    </html>
  );
}
