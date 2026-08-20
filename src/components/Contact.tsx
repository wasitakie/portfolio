"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { formSchema } from "@/lib/schemas";
import { sendEmail } from "@/lib/email";
import { useTranslations } from "next-intl";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/wasitakie", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/wasita",
    label: "LinkedIn",
  },
  { icon: FaEnvelope, href: "mailto:wasitat.wa@gmail.com", label: "Email" },
];

export default function Contact() {
  const t = useTranslations("Contact");
  const [submitted, setSubmitted] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ isError: false, text: "" });
  const contactItems = [
    {
      icon: FaEnvelope,
      label: t("email"),
      value: "wasitat.wa@gmail.com",
      href: "mailto:wasitat.wa@gmail.com",
    },
    {
      icon: FaPhone,
      label: t("phone"),
      value: "+66 92 483 5656",
      href: "tel:+66924835656",
    },
    {
      icon: FaMapMarkerAlt,
      label: t("location"),
      value: t("locationValue"),
      href: null,
    },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(formData: z.infer<typeof formSchema>) {
    setSubmitted(true);
    setStatusMsg({ isError: false, text: "" });
    const response = await sendEmail(formData);
    if (!response.success) {
      setStatusMsg({
        isError: true,
        text: t("error"),
      });
    } else {
      setStatusMsg({ isError: false, text: t("success") });
    }
    setTimeout(() => {
      setSubmitted(false);
      form.reset();
      setStatusMsg({ isError: false, text: "" });
    }, 3000);
  }

  return (
    <section
      id="contact"
      className="relative py-32 px-4 overflow-hidden bg-zinc-950"
    >
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/3 w-125 h-125 bg-purple-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="mb-20 text-center"
        >
          <span className="inline-block text-purple-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/8">
            {t("eyebrow")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 bg-linear-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            {t("title")}
          </h2>
          <div className="w-14 h-0.75 bg-linear-to-r from-purple-500 to-violet-500 rounded-full mx-auto mb-6" />
          <p className="text-zinc-400 max-w-lg mx-auto text-base leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* ── Left: Info Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="lg:w-5/12"
          >
            <div className="h-full rounded-2xl border border-white/8 bg-linear-to-br from-white/6 to-transparent backdrop-blur-sm p-8 flex flex-col gap-8">
              {/* Top accent */}
              <div className="h-px w-full bg-linear-to-r from-transparent via-purple-500/60 to-transparent" />

              <div>
                <h3 className="text-xl font-semibold text-white mb-1.5">
                  {t("infoTitle")}
                </h3>
                <p className="text-zinc-500 text-sm">
                  {t("infoDescription")}
                </p>
              </div>

              {/* Contact items */}
              <div className="space-y-3">
                {contactItems.map(({ icon: Icon, label, value, href }, i) => {
                  const inner = (
                    <div className="flex items-center gap-4 p-3.5 rounded-xl border border-white/5 bg-white/3 group-hover:bg-white/6 group-hover:border-purple-500/20 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/15 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:text-purple-300 transition-all duration-300 shrink-0">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-600 font-semibold uppercase tracking-widest">
                          {label}
                        </p>
                        <p className="text-sm text-zinc-300 group-hover:text-white transition-colors duration-300 mt-0.5">
                          {value}
                        </p>
                      </div>
                    </div>
                  );

                  return href ? (
                    <motion.a
                      key={label}
                      href={href}
                      className="group block"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      {inner}
                    </motion.a>
                  ) : (
                    <div key={label}>{inner}</div>
                  );
                })}
              </div>

              {/* Social */}
              <div>
                <p className="text-[10px] text-zinc-600 font-semibold uppercase tracking-widest mb-3">
                  {t("follow")}
                </p>
                <div className="flex gap-2.5">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.08 }}
                      whileTap={{ scale: 0.94 }}
                      className="w-10 h-10 rounded-xl border border-white/8 bg-white/4 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/15 transition-all duration-300"
                    >
                      <span className="sr-only">{label}</span>
                      <Icon size={17} />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="h-px w-full bg-linear-to-r from-transparent via-purple-500/30 to-transparent" />
            </div>
          </motion.div>

          {/* ── Right: Form Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:w-7/12"
          >
            <div className="h-full rounded-2xl border border-white/8 bg-linear-to-br from-white/6 to-transparent backdrop-blur-sm p-8">
              <div className="h-px w-full bg-linear-to-r from-transparent via-purple-500/60 to-transparent mb-8" />

              <div className="mb-7">
                <h3 className="text-xl font-semibold text-white mb-1.5">
                  {t("formTitle")}
                </h3>
                <p className="text-zinc-500 text-sm">
                  {t("formDescription")}
                </p>
              </div>

              <form
                id="contact-form"
                className="space-y-1"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FieldGroup className="gap-5">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Controller
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <Field>
                          <FieldLabel className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                            {t("name")}
                          </FieldLabel>
                          <Input
                            placeholder={t("namePlaceholder")}
                            {...field}
                            className="bg-white/4 border-white/10 text-white placeholder:text-zinc-600 focus-visible:border-purple-500/60 focus-visible:ring-purple-500/20 hover:border-white/20 transition-all duration-200 h-10 rounded-xl"
                          />
                          <FieldError>
                            {form.formState.errors.name?.message}
                          </FieldError>
                        </Field>
                      )}
                    />
                    <Controller
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <Field>
                          <FieldLabel className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                            {t("email")}
                          </FieldLabel>
                          <Input
                            placeholder={t("emailPlaceholder")}
                            {...field}
                            className="bg-white/4 border-white/10 text-white placeholder:text-zinc-600 focus-visible:border-purple-500/60 focus-visible:ring-purple-500/20 hover:border-white/20 transition-all duration-200 h-10 rounded-xl"
                          />
                          <FieldError>
                            {form.formState.errors.email?.message}
                          </FieldError>
                        </Field>
                      )}
                    />
                  </div>

                  {/* Subject */}
                  <Controller
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <Field>
                        <FieldLabel className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                          {t("subject")}
                        </FieldLabel>
                        <Input
                          placeholder={t("subjectPlaceholder")}
                          {...field}
                          className="bg-white/4 border-white/10 text-white placeholder:text-zinc-600 focus-visible:border-purple-500/60 focus-visible:ring-purple-500/20 hover:border-white/20 transition-all duration-200 h-10 rounded-xl"
                        />
                        <FieldError>
                          {form.formState.errors.subject?.message}
                        </FieldError>
                      </Field>
                    )}
                  />

                  {/* Message */}
                  <Controller
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <Field>
                        <FieldLabel className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                          {t("message")}
                        </FieldLabel>
                        <Textarea
                          placeholder={t("messagePlaceholder")}
                          rows={5}
                          {...field}
                          className="bg-white/4 border-white/10 text-white placeholder:text-zinc-600 focus-visible:border-purple-500/60 focus-visible:ring-purple-500/20 hover:border-white/20 transition-all duration-200 resize-none rounded-xl"
                        />
                        <FieldError>
                          {form.formState.errors.message?.message}
                        </FieldError>
                      </Field>
                    )}
                  />
                </FieldGroup>

                {/* Action buttons */}
                <div className="flex items-center gap-3 pt-5">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      type="submit"
                      form="contact-form"
                      disabled={submitted}
                      className="gap-2 bg-linear-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white border-0 px-6 h-10 rounded-xl font-medium text-sm shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_28px_rgba(147,51,234,0.5)] transition-all duration-300 disabled:opacity-60"
                    >
                      {submitted ? (
                        <>
                          <svg
                            className="w-3.5 h-3.5 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            />
                          </svg>
                          {t("sending")}
                        </>
                      ) : (
                        <>
                          <FaPaperPlane size={12} />
                          {t("send")}
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => form.reset()}
                    className="h-10 px-5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/6 text-sm font-medium transition-all duration-200"
                  >
                    {t("reset")}
                  </Button>

                  {statusMsg.text && (
                    <motion.span
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`text-sm ${statusMsg.isError ? "text-red-400" : "text-green-400"} font-medium`}
                    >
                      {statusMsg.text}
                    </motion.span>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
