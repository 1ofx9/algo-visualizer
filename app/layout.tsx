import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme/theme-provider";
import { SortingAlgorithmProvider } from "@/context/visualizer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Algorithm Visualizer",
  description: "Visualize algorithms in action",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script id="viewport-adjustment" strategy="beforeInteractive">
          {`
            function getCookie(name) {
              const value = "; " + document.cookie;
              const parts = value.split("; " + name + "=");
              if (parts.length === 2) return parts.pop().split(";").shift();
            }
            var viewMode = getCookie("view-mode");
            var viewport = document.querySelector('meta[name="viewport"]');
            if (viewMode === "desktop") {
              viewport.setAttribute('content', 'width=1024');
            } else if (viewMode === "mobile") {
              viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SortingAlgorithmProvider>{children}</SortingAlgorithmProvider>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
