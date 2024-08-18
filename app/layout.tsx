import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme/theme-provider";
import { SortingAlgorithmProvider } from "@/context/visualizer";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SortingAlgorithmProvider>{children}</SortingAlgorithmProvider>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
