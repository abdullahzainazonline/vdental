"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Heart, Users, Shield, TrendingUp, Award, Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

const BENEFITS = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Career Growth",
    description: "We provide opportunities for continuous learning and professional development.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Health Benefits",
    description: "Comprehensive dental and health benefits for you and your family.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Supportive Team",
    description: "Work with a friendly, professional team that values collaboration.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Environment",
    description: "A safe, modern, and fully equipped clinic adhering to the highest standards.",
  },
];

const JOB_OPENINGS = [
  {
    title: "Dental Assistant",
    type: "Full-Time",
    location: "SS2, Petaling Jaya",
    description: "We are looking for a motivated and friendly Dental Assistant to join our growing team. Experience is a plus but not required as training will be provided.",
  },
  {
    title: "Receptionist / Front Desk",
    type: "Full-Time",
    location: "SS2, Petaling Jaya",
    description: "Seeking a welcoming and organized individual to manage patient scheduling, inquiries, and clinic flow. Excellent communication skills are essential.",
  },
  {
    title: "Associate Dentist",
    type: "Full-Time / Part-Time",
    location: "SS2, Petaling Jaya",
    description: "Join our team of experienced professionals. We are looking for a dedicated dentist who prioritizes patient care and clinical excellence.",
  },
];

export default function CareersPage() {
  return (
    <div className="relative min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/V Dental Website images/Careers Page/Careers_Hero_Bg_pc.jpg"
            alt="Careers Background"
            fill
            className="object-cover hidden md:block"
            priority
          />
          <Image
            src="/V Dental Website images/Careers Page/Careers_Hero_Bg_mobile.jpg"
            alt="Careers Background Mobile"
            fill
            className="object-cover block md:hidden"
            priority
          />
          <div className="absolute inset-0 bg-neutral-900/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_SMOOTH }}
          >
            <h1
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Have A Career With Us
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-neutral-200 sm:text-xl">
              Join V Dental Clinic and become part of a passionate team dedicated to delivering exceptional dental care and creating beautiful smiles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Discover what makes V Dental Clinic a great place to work."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: EASE_SMOOTH }}
              className="group rounded-3xl bg-neutral-50 p-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                {benefit.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>
                {benefit.title}
              </h3>
              <p className="text-neutral-500">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Current Openings"
            subtitle="Find the perfect role for your skills and passion."
            centered
          />

          <div className="mt-16 mx-auto max-w-4xl space-y-6">
            {JOB_OPENINGS.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: EASE_SMOOTH }}
                className="flex flex-col justify-between gap-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg md:flex-row md:items-center"
              >
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {job.type}
                    </span>
                    <span className="inline-flex items-center text-xs font-medium text-neutral-500">
                      {job.location}
                    </span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>
                    {job.title}
                  </h3>
                  <p className="text-neutral-500">{job.description}</p>
                </div>
                <div className="shrink-0">
                  <a
                    href="mailto:vdental.ss2@gmail.com?subject=Job Application: ${job.title}"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-primary"
                  >
                    <Briefcase className="h-4 w-4" />
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE_SMOOTH }}
          >
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 sm:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
              Join Our <span className="text-primary">Growing Family</span>
            </h2>
            <p className="mb-8 text-lg text-neutral-500">
              At V Dental Clinic, we believe that a happy team leads to happy patients. We foster a supportive, inclusive, and dynamic work environment where every member is valued and encouraged to shine.
            </p>
            <ul className="space-y-4">
              {[
                "State-of-the-art facilities and equipment",
                "Focus on work-life balance",
                "Regular team building and events",
                "Opportunities to work with specialists",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-700">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE_SMOOTH }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
                alt="Our Team Culture"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent-dark">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">Rated Great Place to Work</p>
                  <p className="text-xs text-neutral-500">By our staff</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
