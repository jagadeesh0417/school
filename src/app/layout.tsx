import type { Metadata } from "next";
import { Nunito, Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import InquiryPopup from "@/components/InquiryPopup";
import { SCHOOL } from "@/lib/constants";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SCHOOL.name} | ${SCHOOL.tagline}`,
    template: `%s | ${SCHOOL.name}`,
  },
  description: `${SCHOOL.name} - ${SCHOOL.type} in ${SCHOOL.location}. ${SCHOOL.tagline}. Enroll your child for a premium Montessori-based early education experience.`,
  keywords: ["preschool", "montessori", "kurnool", "scribbles", "international preschool", "early childhood education", "play school", "nursery school"],
  openGraph: {
    title: `${SCHOOL.name} | ${SCHOOL.tagline}`,
    description: `Premium Montessori-based preschool in Kurnool. ${SCHOOL.tagline}.`,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fredoka.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg-cream text-text font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
        <InquiryPopup />
      </body>
    </html>
  );
}
