"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Send, CheckCircle2 } from "lucide-react";
import gsap from "gsap";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call
    console.log("Form submission:", new FormData(e.currentTarget as HTMLFormElement));

    setTimeout(() => {
      setStatus("success");

      // Success animation
      gsap.from(".success-content", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tightest mb-8 leading-[0.9]">
              READY TO <br /> <span className="text-white/40 italic">ASCEND?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-md leading-relaxed mb-12">
              We&apos;re currently accepting new projects and collaborations for {new Date().getFullYear() + 1}. Let&apos;s discuss your vision.
            </p>
          </div>

          <div className="relative min-h-[400px]">
            {status !== "success" ? (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={cn(
                  "space-y-8 transition-opacity duration-500",
                  status === "submitting" ? "opacity-50 pointer-events-none" : "opacity-100"
                )}
              >
                <div className="group">
                  <label className="text-xs uppercase tracking-widest text-white/40 mb-2 block font-mono">Your Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors text-xl placeholder:text-white/10"
                  />
                </div>
                <div className="group">
                  <label className="text-xs uppercase tracking-widest text-white/40 mb-2 block font-mono">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors text-xl placeholder:text-white/10"
                  />
                </div>
                <div className="group">
                  <label className="text-xs uppercase tracking-widest text-white/40 mb-2 block font-mono">Your Message</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors text-xl placeholder:text-white/10 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-4 text-xl font-bold tracking-tight hover:text-accent transition-colors"
                >
                  <span>{status === "submitting" ? "SENDING..." : "SEND MESSAGE"}</span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-black transition-all">
                    <Send size={20} className={status === "submitting" ? "animate-pulse" : ""} />
                  </div>
                </button>
              </form>
            ) : (
              <div className="success-content flex flex-col items-center justify-center h-full text-center space-y-6">
                <div className="w-24 h-24 rounded-full bg-accent/10 border border-accent flex items-center justify-center">
                  <CheckCircle2 size={48} className="text-accent" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight">Message Received.</h3>
                <p className="text-white/60">
                  Thank you for reaching out. <br /> Our team will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-accent font-mono text-sm uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
