import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaheed Mohamed Ali — Software Engineer",
  description: "The work of Shaheed Mohamed Ali, software engineer.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header shell">
          <nav aria-label="Main navigation">
            <Link href="/#work">Work</Link>
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
            {profile.resume && (
              <a href={profile.resume} target="_blank" rel="noopener noreferrer">Résumé</a>
            )}
          </nav>
        </header>
        <main id="main" className="shell main-content">{children}</main>
        <footer className="site-footer shell">
          <span>© {new Date().getFullYear()} Shaheed Mohamed Ali</span>
          <a href="#top">Back to top</a>
        </footer>
      </body>
    </html>
  );
}
