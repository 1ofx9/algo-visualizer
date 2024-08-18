import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme/theme-provider";

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
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
