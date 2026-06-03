import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES, SITE_CONFIG, TESTIMONIALS, GALLERY_ITEMS, FAQS, STATS } from "@/lib/constants";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, Star, Shield, Award, Clock, ChevronDown } from "lucide-react";
import Image from "next/image";

// Reusing some existing components. Need to make sure they can be used server-side or converted to client.
// Since we want framer-motion and interactivity, we should create a client component wrapper or make the page partly client.
// We'll create a separate client component `ServicePageClient` to handle animations.

import ServicePageClient from "./ServicePageClient";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) return {};

  return {
    title: (service as any).metaTitle || `${service.title} | ${SITE_CONFIG.name}`,
    description: (service as any).metaDescription || service.description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  // Filter Testimonials - either specifically mentioning the service title (or close to it) or just use top rated ones
  let relevantTestimonials = TESTIMONIALS.filter(t => 
    t.service.toLowerCase().includes(service.title.toLowerCase()) || 
    service.title.toLowerCase().includes(t.service.toLowerCase())
  );
  if (relevantTestimonials.length === 0) relevantTestimonials = TESTIMONIALS.slice(0, 3); // Fallback to first 3

  // Filter Gallery Items
  const cat = (service as any).galleryCategory || "General";
  let relevantGallery = GALLERY_ITEMS.filter(g => g.category === cat);
  if (relevantGallery.length === 0) relevantGallery = GALLERY_ITEMS.slice(0, 4);

  // Schema Markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": (service as any).metaTitle || service.title,
    "description": (service as any).metaDescription || service.description,
    "url": `${SITE_CONFIG.url}/services/${slug}`,
    "about": {
      "@type": "MedicalTherapy",
      "name": service.title
    },
    "provider": {
      "@type": "Dentist",
      "name": SITE_CONFIG.name,
      "image": `${SITE_CONFIG.url}/vdental_logo.jpg`,
      "telephone": SITE_CONFIG.phoneRaw,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "155, Jalan SS2/24",
        "addressLocality": "Petaling Jaya",
        "addressRegion": "Selangor",
        "postalCode": "47300",
        "addressCountry": "MY"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServicePageClient 
        service={service} 
        testimonials={relevantTestimonials}
        gallery={relevantGallery}
        faqs={FAQS}
        stats={STATS}
      />
    </>
  );
}
