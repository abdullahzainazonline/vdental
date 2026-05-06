import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function TermsConditionsPage() {
  return (
    <div className="pt-32 pb-20 sm:pt-40 sm:pb-32 min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Legal" 
          title="Terms & Conditions" 
          subtitle="Last updated: May 2026" 
        />
        
        <div className="mt-12 space-y-8 rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-neutral-200/50 text-neutral-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity and V Dental Clinic PJ, concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>3. User Representations</h2>
            <p>
              By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>4. Modifications and Interruptions</h2>
            <p>
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
