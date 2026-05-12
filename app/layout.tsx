import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "V Dental Clinic PJ - SS2 Dentist | Petaling Jaya",
    template: "%s | V Dental Clinic PJ",
  },
  description:
    "V Dental Clinic PJ in SS2, Petaling Jaya offers comprehensive dental care including general dentistry, orthodontics, cosmetic dentistry, implants, and oral surgery. Trusted by 10,000+ patients with 15+ years of experience.",
  keywords: [
    "dentist SS2",
    "dental clinic Petaling Jaya",
    "V Dental Clinic",
    "braces PJ",
    "teeth whitening SS2",
    "dental implants Petaling Jaya",
    "orthodontist PJ",
    "cosmetic dentistry Malaysia",
    "family dentist Klang Valley",
  ],
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://vdental.com.my",
    siteName: "V Dental Clinic PJ",
    title: "V Dental Clinic PJ - SS2 Dentist | Modern Dental Care in Petaling Jaya",
    description:
      "Comprehensive dental care for the whole family. General dentistry, orthodontics, cosmetic dentistry, implants & more. 15+ years serving SS2, PJ.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "V Dental Clinic PJ - Modern Dental Care",
      },
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://vdental.com.my" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#0E7490" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "V Dental Clinic PJ",
              image:
                "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
              url: "https://vdental.com.my",
              telephone: "+603-7865 0510",
              address: {
                "@type": "PostalAddress",
                streetAddress: "63, Jalan SS 2/75, SS 2",
                addressLocality: "Petaling Jaya",
                addressRegion: "Selangor",
                postalCode: "47300",
                addressCountry: "MY",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 3.1192,
                longitude: 101.6186,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                  ],
                  opens: "09:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "450",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${greatVibes.variable} antialiased overflow-x-hidden`}
      >
        <BackgroundAnimation />
        <Toaster position="top-right" />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
