import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://plugpakka.com"),
  title: "PlugPakka — Is that EV charger working? Know before you go.",
  description:
    "PlugPakka shows photo-verified status of public EV chargers in India, checked on the spot by people nearby. Early access now open.",
  alternates: { canonical: "/" },
  // GitHub Pages can't send custom headers, so the referrer policy goes in a meta tag instead.
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    title: "PlugPakka — Know the charger works before you go",
    description: "Photo-verified EV charger status, checked on the spot by people nearby.",
    url: "https://plugpakka.com",
    siteName: "PlugPakka",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#06080d" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${display.variable} antialiased`}>
      <body className="min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
