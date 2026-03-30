import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AetherCube - Enterprise Web3 AI Platform",
  description: "Production-ready Web3 applications with AI-powered code generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
