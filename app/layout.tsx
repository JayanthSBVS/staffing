import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zyra Talent | AI-Powered Enterprise Staffing",
  description:
    "AI-powered hiring and expert recruiter validation for enterprise technology teams."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
