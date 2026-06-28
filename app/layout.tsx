import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shaheed Mohamed Ali",
  description: "Personal portfolio of Shaheed Mohamed Ali.",
};

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="border-b border-foreground/10">
          <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5 text-sm">
            <Link href="/" className="font-medium tracking-tight">
              Shaheed Mohamed Ali
            </Link>
            <ul className="flex gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
          {children}
        </main>
        <footer className="border-t border-foreground/10">
          <div className="mx-auto max-w-2xl px-6 py-6 text-sm text-foreground/50">
            © {new Date().getFullYear()} Shaheed Mohamed Ali
          </div>
        </footer>
      </body>
    </html>
  );
}
