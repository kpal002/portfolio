// Root layout — wraps every page in the App Router.
// Loads Space Mono (bold mono for the brutalist aesthetic) and global styles.

import { Space_Mono } from "next/font/google";
import "./globals.css";

// Space Mono loaded as a CSS variable so Tailwind can pick it up via
// font-mono / font-sans (both aliased to this in tailwind.config.js).
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

// Site-wide metadata — edit copy in lib/content.js if you need to change.
export const metadata = {
  title: "Kuntal Pal — AI Engineer",
  description:
    "Personal site of Kuntal Pal — AI engineer building LLM systems, agentic infrastructure, and real-time AI products.",
  metadataBase: new URL("https://kuntalpal.com"),
  openGraph: {
    title: "Kuntal Pal — AI Engineer",
    description:
      "Personal site of Kuntal Pal — AI engineer building LLM systems, agentic infrastructure, and real-time AI products.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body className="font-mono bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
