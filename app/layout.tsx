import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: { default: "manas.life", template: "%s · manas.life" },
  description: "Documenting the journey — trading, quants, and life.",
  metadataBase: new URL("https://manas.life"),
  openGraph: { siteName: "manas.life", type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html:`
          (function(){
            var t = localStorage.getItem('theme') || 'dark';
            document.documentElement.setAttribute('data-theme', t);
          })();
        `}} />
      </head>
      <body style={{ display:"flex", flexDirection:"column", minHeight:"100vh" }}>
        <ThemeProvider>
          <Nav />
          <main style={{ flex:1 }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
