"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  title?: string;
  subtitle?: string;
  email?: string;
  phone?: string;
  location?: string;
  className?: string;
}

export default function Contact({
  title = "Let's Work Together",
  subtitle = "Get In Touch",
  email = "macmacpongs02@gmail.com",
  phone = "+63 962 943 8648",
  location = "San Rafael, Bulacan",
  className = "",
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // EmailJS configuration - you'll need to set these in .env.local
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.");
      }

      // Send email via EmailJS
      // Template variables must match exactly what's in your EmailJS template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    } catch (error: any) {
      console.error("Email sending failed:", error);
      let errorMessage = "Failed to send message. Please try again or contact me directly via email.";
      
      // Provide more specific error messages
      if (error?.text) {
        console.error("EmailJS Error Details:", error.text);
        if (error.text.includes("template") || error.status === 422) {
          errorMessage = "Template configuration error. Please check your EmailJS template variables match: {{from_name}}, {{from_email}}, {{subject}}, {{message}}";
        }
      }
      
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className={`relative min-h-screen bg-white py-24 overflow-hidden ${className}`}
    >
      {/* Decorative background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute top-[30%] left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-6">
              <span className="w-16 h-px bg-gray-400"></span>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                {subtitle}
              </p>
              <span className="w-16 h-px bg-gray-400"></span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black tracking-tight">
              {title}
            </h2>

            <div className="flex justify-center">
              <div className="w-24 h-[2px] bg-black"></div>
            </div>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="relative bg-white border border-black p-8">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black"></div>

                <div className="space-y-6">
                  <div className="pb-6 border-b border-black">
                    <h3 className="text-xl font-bold text-black uppercase tracking-[0.15em]">
                      Contact Information
                    </h3>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                      Email
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="block text-base font-medium text-black hover:text-gray-600 transition-colors"
                    >
                      {email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                      Phone
                    </p>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-base font-medium text-black hover:text-gray-600 transition-colors"
                    >
                      {phone}
                    </a>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                      Location
                    </p>
                    <p className="text-base font-medium text-black">{location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="relative bg-white border border-black p-8">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black"></div>

                <div className="space-y-6">
                  <div className="pb-6 border-b border-black">
                    <h3 className="text-xl font-bold text-black uppercase tracking-[0.15em]">
                      Connect With Me
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://github.com/MakPongase"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 border border-black text-center text-sm font-medium uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/john-mark-pongase-7732482b1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 border border-black text-center text-sm font-medium uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.facebook.com/von.mak.2025"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 border border-black text-center text-sm font-medium uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/thatonerandommak/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 border border-black text-center text-sm font-medium uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative bg-white border border-black p-8">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="pb-6 border-b border-black">
                  <h3 className="text-xl font-bold text-black uppercase tracking-[0.15em]">
                    Send A Message
                  </h3>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-[0.2em] text-gray-500 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black bg-white text-black focus:outline-none focus:border-gray-600 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-[0.2em] text-gray-500 font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black bg-white text-black focus:outline-none focus:border-gray-600 transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-xs uppercase tracking-[0.2em] text-gray-500 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black bg-white text-black focus:outline-none focus:border-gray-600 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-[0.2em] text-gray-500 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-black bg-white text-black resize-none focus:outline-none focus:border-gray-600 transition-colors"
                  />
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div
                    className={`p-4 border ${
                      submitStatus.type === "success"
                        ? "border-green-600 bg-green-50 text-green-800"
                        : "border-red-600 bg-red-50 text-red-800"
                    }`}
                  >
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


