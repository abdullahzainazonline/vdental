"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Send, Calendar, User, Phone, Mail, MessageSquare, Clipboard } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { hashData, trackBooking } from "@/lib/gtag";

const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface BookingFormData {
  name: string;
  phone: string;
  service: string;
}

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    try {
      const text = `Hello V Dental, I would like to request an appointment.

*Name:* ${data.name}
*Phone:* ${data.phone}
*Service:* ${data.service}`;

      const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`;
      
      try {
        const hashedPhone = await hashData(data.phone.replace(/[\s\+\-\(\)]/g, ''));
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('set', 'user_data', {
            sha256_phone_number: hashedPhone
          });
        }
      } catch (e) {
        console.error('Error hashing user data', e);
      }

      trackBooking();
      window.open(whatsappUrl, "_blank");

      toast.success("Redirecting to WhatsApp...", {
        duration: 5000,
        style: { background: "#10B981", color: "#fff", fontWeight: "600", borderRadius: "16px" },
        iconTheme: { primary: "#fff", secondary: "#10B981" },
      });
      reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to submit appointment request.";
      toast.error(message, {
        duration: 5000,
        style: { background: "#EF4444", color: "#fff", fontWeight: "600", borderRadius: "16px" },
      });
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-neutral-200 bg-neutral-50/50 px-4 py-3.5 pl-12 text-sm text-neutral-900 transition-all duration-300 focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:shadow-lg focus:shadow-primary/5 placeholder:text-neutral-400";
  const errorClass = "mt-1.5 text-xs font-medium text-red-500";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE_SMOOTH }}
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-5 ${compact ? "" : "rounded-3xl bg-white p-7 shadow-xl shadow-neutral-900/5 md:p-9 border border-primary/30"}`}
    >
      {!compact && (
        <div className="mb-7 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>
            Book Your Appointment
          </h3>
          <p className="mt-2 text-sm text-neutral-500">
            Fill in the form and we&apos;ll get back to you within 24 hours
          </p>
        </div>
      )}

      <div className={compact ? "space-y-4" : "grid gap-5 md:grid-cols-2"}>
        {/* Name */}
        <div className="relative group">
          <User className="absolute left-4 top-4 h-4 w-4 text-neutral-400 transition-colors group-focus-within:text-primary" />
          <input {...register("name", { required: "Name is required" })} placeholder="Your Full Name" className={inputClass} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div className="relative group">
          <Phone className="absolute left-4 top-4 h-4 w-4 text-neutral-400 transition-colors group-focus-within:text-primary" />
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: { value: /^[0-9+\-\s()]{8,15}$/, message: "Invalid phone number" },
            })}
            placeholder="Phone (e.g. 012-345 6789)"
            className={inputClass}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      {/* Service - Made more prominent */}
      <div className="relative group">
        <Clipboard className="absolute left-4 top-5 h-5 w-5 text-primary transition-colors group-focus-within:text-primary-light" />
        <select
          {...register("service", { required: "Please select a service" })}
          className={inputClass + " appearance-none cursor-pointer border-primary/50 bg-primary/5 py-4 pl-12 text-base font-semibold text-primary shadow-sm hover:bg-primary/10"}
          defaultValue=""
        >
          <option value="" disabled>Select Service Needed...</option>
          <option value="Implant Solutions">Implant Solutions</option>
          <option value="Orthodontics | Braces">Orthodontics | Braces</option>
          <option value="Oral Surgeries">Oral Surgeries</option>
          <option value="Smile Makeover | Veneer | Aesthetic">Smile Makeover | Veneer | Aesthetic</option>
          <option value="General Dentistry">General Dentistry</option>
          <option value="Periodontal Treatments">Periodontal Treatments</option>
          <option value="Dental X-Rays">Dental X-Rays</option>
          <option value="Kids Dentistry">Kids Dentistry</option>
          <option value="Emergency">Emergency</option>
          <option value="Wisdom Teeth Removal">Wisdom Teeth Removal</option>
          <option value="Denture">Denture</option>
        </select>
        {errors.service && <p className={errorClass}>{errors.service.message}</p>}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="btn-shine flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-accent to-accent-light px-6 py-4 text-base font-bold text-neutral-900 shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-neutral-900 border-t-transparent" />
        ) : (
          <>
            <Send className="h-5 w-5" />
            {compact ? "Send Request" : "Request Appointment"}
          </>
        )}
      </motion.button>
    </motion.form>
  );
}
