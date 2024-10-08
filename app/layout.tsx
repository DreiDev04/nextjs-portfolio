import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/provider/theme-provider";
import Head from "next/head";

const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Drei's  Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/man-technologist.svg" type="image/svg" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          space_Grotesk.variable
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-24 flex items-center">
            <Navbar />
          </div>
          <div className="h-[calc(100vh - 6rem)]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
