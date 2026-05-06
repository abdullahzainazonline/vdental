import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 sm:pt-40 sm:pb-32 min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Legal" 
          title="Privacy Policy" 
          subtitle="Last updated: May 2026" 
        />
        
        <div className="mt-12 space-y-8 rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-neutral-200/50 text-neutral-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>1. Introduction</h2>
            <p>
              Welcome to V Dental Clinic PJ. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>4. Contact Us</h2>
            <p>
              If you have questions or comments about this notice, you may email us or contact us by post at our clinic address in SS2, Petaling Jaya.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
