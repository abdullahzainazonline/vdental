"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Send, Calendar, User, Phone, MessageSquare, Clipboard } from "lucide-react";
import { SERVICES } from "@/lib/constants";

interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Booking submitted:", data);
    toast.success("Appointment request sent! We'll contact you within 24 hours.", {
      duration: 5000,
      style: { background: "#10B981", color: "#fff", fontWeight: "600", borderRadius: "16px" },
      iconTheme: { primary: "#fff", secondary: "#10B981" },
    });
    reset();
  };

  const inputClass =
    "w-full rounded-2xl border border-neutral-200 bg-neutral-50/50 px-4 py-3.5 pl-12 text-sm text-neutral-900 transition-all duration-300 focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:shadow-lg focus:shadow-primary/5 placeholder:text-neutral-400";
  const errorClass = "mt-1.5 text-xs font-medium text-red-500";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

        {/* Service */}
        <div className="relative group">
          <Clipboard className="absolute left-4 top-4 h-4 w-4 text-neutral-400 transition-colors group-focus-within:text-primary" />
          <select {...register("service", { required: "Please select a service" })} className={inputClass + " appearance-none cursor-pointer"} defaultValue="">
            <option value="" disabled>Select Service</option>
            <optgroup label="General Dentistry">
              <option value="Scaling & Polishing">Scaling & Polishing</option>
              <option value="Fillings">Fillings</option>
              <option value="Extractions">Extractions</option>
            </optgroup>
            <option value="Wisdom Tooth Removal">Wisdom Tooth Removal</option>
            <optgroup label="Orthodontic Services">
              <option value="Braces & Aligners">Braces & Aligners</option>
            </optgroup>
            <optgroup label="Cosmetic Dentistry">
              <option value="Dental Veneers">Dental Veneers</option>
              <option value="Dental Crowns">Dental Crowns</option>
              <option value="Dental Bridge">Dental Bridge</option>
            </optgroup>
            <option value="Dental Implant">Dental Implant</option>
            <option value="Root Canal Treatment">Root Canal Treatment</option>
            <option value="Gum Treatment">Gum Treatment</option>
            <option value="Tooth Gem">Tooth Gem</option>
            <option value="Dentures">Dentures</option>
          </select>
          {errors.service && <p className={errorClass}>{errors.service.message}</p>}
        </div>

        {/* Date */}
        <div className="relative group">
          <Calendar className="absolute left-4 top-4 h-4 w-4 text-neutral-400 transition-colors group-focus-within:text-primary" />
          <input
            type="date"
            {...register("date", { required: "Please select a date" })}
            className={inputClass + " cursor-pointer"}
            min={new Date().toISOString().split("T")[0]}
          />
          {errors.date && <p className={errorClass}>{errors.date.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="relative group">
        <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-neutral-400 transition-colors group-focus-within:text-primary" />
        <textarea
          {...register("message")}
          placeholder="Any additional notes or concerns (optional)"
          rows={compact ? 2 : 3}
          className={inputClass + " resize-none"}
        />
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
