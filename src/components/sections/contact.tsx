"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/data";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: null,
  },
];

export function Contact() {
  const [sent, setSent] = React.useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect."
          description="I'm open to internships, research collaborations, and conversations about finance, analytics, and policy. The fastest way to reach me is email."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="glass-card lg:col-span-2 flex flex-col gap-5 p-7"
          >
            <div className="space-y-4">
              {contactItems.map((item) => {
                const content = (
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-xl border border-border/40 bg-background/40 p-3 backdrop-blur transition-colors hover:border-primary/40 hover:bg-primary/[0.04]"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border/40 bg-background/40 p-3 backdrop-blur"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-auto flex items-center gap-2 border-t border-border/40 pt-5">
              <span className="text-xs text-muted-foreground">Find me on</span>
              <div className="flex gap-1.5">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-md border border-border/60 bg-background/60 p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-md border border-border/60 bg-background/60 p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Email"
                  className="rounded-md border border-border/60 bg-background/60 p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            onSubmit={onSubmit}
            className="glass-card lg:col-span-3 space-y-4 p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-muted-foreground"
                >
                  Name
                </label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium text-muted-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Tell me a bit about what you have in mind..."
              />
            </div>
            <div className="flex items-center justify-between gap-3 pt-1">
              <p className="text-xs text-muted-foreground">
                Submitting opens your email client with the message pre-filled.
              </p>
              <Button type="submit">
                {sent ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Sent
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
