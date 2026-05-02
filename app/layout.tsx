import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zyion Architecture | AI-Powered Enterprise Staffing",
  description: "AI-powered hiring and expert recruiter validation for enterprise technology teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#030303] text-[#F5F5F5] antialiased selection:bg-white selection:text-black font-sans relative">
        {/* Global Tactile Noise overlay for material reality */}
        <div 
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.02] mix-blend-screen"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
        />

        <div className="min-h-screen flex flex-col relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}