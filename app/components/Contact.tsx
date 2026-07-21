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
  title = "LET'S WORK TOGETHER",
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
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    } catch (error: any) {
      console.error("Email sending failed:", error);
      let errorMessage =
        "Failed to send message. Please try again or contact me directly via email.";

      if (error?.text) {
        console.error("EmailJS Error Details:", error.text);
        if (error.text.includes("template") || error.status === 422) {
          errorMessage =
            "Template configuration error. Please check your EmailJS template variables match: {{from_name}}, {{from_email}}, {{subject}}, {{message}}";
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
      className={`relative bg-white text-black border-b border-gray-200 ${className}`}
    >
      {/* Section Header Bar */}
      <div className="border-b border-gray-200 px-8 sm:px-12 lg:px-16 py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black uppercase">
          {title}
        </h2>
        <span className="text-xl sm:text-2xl font-mono font-bold text-gray-400 self-start sm:self-auto">
          [05]
        </span>
      </div>

      {/* Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Contact Information */}
        <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 lg:border-r border-b lg:border-b-0 border-gray-200 bg-gray-50/50 flex flex-col justify-between gap-12">
          <div className="space-y-8">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-400">
              Direct Contact
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              Interested in collaborating, building something exciting, or inviting me to speak? I&apos;d love to hear from you.
            </p>

            <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {/* Email */}
              <div className="py-5 space-y-1">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                  Email Address
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-base sm:text-lg font-mono font-bold text-black hover:underline break-all block"
                >
                  {email}
                </a>
              </div>

              {/* Phone */}
              <div className="py-5 space-y-1">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                  Phone Number
                </div>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="text-base sm:text-lg font-mono font-bold text-black hover:underline block"
                >
                  {phone}
                </a>
              </div>

              {/* Location */}
              <div className="py-5 space-y-1">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                  Location
                </div>
                <div className="text-base sm:text-lg font-mono font-bold text-black">
                  {location}
                </div>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="border border-black bg-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-black">
                Open for Opportunities
              </span>
            </div>
            <span className="text-xs font-mono text-gray-400">[2026]</span>
          </div>
        </div>

        {/* Right Column: Architectural Form */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl w-full mx-auto">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-400 mb-6">
              Send a Message
            </div>

            {submitStatus.type && (
              <div
                className={`p-4 border text-xs font-mono uppercase tracking-wider ${
                  submitStatus.type === "success"
                    ? "border-emerald-600 bg-emerald-50 text-emerald-900"
                    : "border-red-600 bg-red-50 text-red-900"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="JOHN DOE"
                  className="w-full border border-gray-300 bg-white p-3.5 text-sm font-mono text-black placeholder:text-gray-300 focus:border-black focus:outline-hidden transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="JOHN@EXAMPLE.COM"
                  className="w-full border border-gray-300 bg-white p-3.5 text-sm font-mono text-black placeholder:text-gray-300 focus:border-black focus:outline-hidden transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="PROJECT INQUIRY / COLLABORATION"
                className="w-full border border-gray-300 bg-white p-3.5 text-sm font-mono text-black placeholder:text-gray-300 focus:border-black focus:outline-hidden transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="TELL ME ABOUT YOUR PROJECT OR IDEA..."
                className="w-full border border-gray-300 bg-white p-3.5 text-sm font-mono text-black placeholder:text-gray-300 focus:border-black focus:outline-hidden transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-4 text-xs font-mono font-bold uppercase tracking-[0.25em] hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <span>SENDING MESSAGE...</span>
              ) : (
                <>
                  <span>TRANSMIT MESSAGE</span>
                  <span>↗</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
