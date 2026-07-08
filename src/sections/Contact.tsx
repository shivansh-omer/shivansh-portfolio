import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validation";
import { emailjsConfig } from "@/data/emailjsConfig";
import { siteConfig } from "@/data/siteConfig";

type SubmitState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    setSubmitState("loading");
    try {
      const isConfigured =
        !emailjsConfig.serviceId.startsWith("YOUR_") &&
        !emailjsConfig.templateId.startsWith("YOUR_") &&
        !emailjsConfig.publicKey.startsWith("YOUR_");

      if (!isConfigured) {
        // EmailJS isn't configured yet — surface this clearly instead of
        // failing silently. See src/data/emailjsConfig.ts for setup steps.
        console.warn(
          "EmailJS is not configured. Fill in src/data/emailjsConfig.ts to enable the contact form."
        );
        throw new Error("EmailJS not configured");
      }

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        { name: data.name, email: data.email, message: data.message },
        { publicKey: emailjsConfig.publicKey }
      );

      setSubmitState("success");
      reset();
      setTimeout(() => setSubmitState("idle"), 4000);
    } catch {
      setSubmitState("error");
      setTimeout(() => setSubmitState("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Open to SDE, frontend, full-stack, and AI engineering opportunities — reach out and I'll get back to you."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-4">
            <GlassCard hover={false} className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted hover:text-primary"
                >
                  {siteConfig.email}
                </a>
              </div>
            </GlassCard>
            <GlassCard hover={false} className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold">Location</p>
                <p className="text-sm text-muted">{siteConfig.location}</p>
              </div>
            </GlassCard>
          </div>

          <GlassCard hover={false}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="What are you looking to build?"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitState === "loading"}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgb(99_102_241_/_0.6)] transition-all hover:-translate-y-0.5 disabled:opacity-60"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {submitState === "loading" && (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </motion.span>
                  )}
                  {submitState === "success" && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 size={16} /> Message sent!
                    </motion.span>
                  )}
                  {(submitState === "idle" || submitState === "error") && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send size={16} />
                      {submitState === "error" ? "Try again" : "Send Message"}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {submitState === "error" && (
                <p className="text-center text-xs text-red-500">
                  Something went wrong sending your message — email me directly at{" "}
                  {siteConfig.email} instead.
                </p>
              )}
            </form>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
