"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Mail, Globe, Heart, Video, Music, Send, Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "Instagram",
    icon: Globe,
    url: "https://www.instagram.com/jimbolt1/",
    handle: "@jimbolt1",
  },
  {
    name: "TikTok",
    icon: Heart,
    url: "https://www.tiktok.com/@jimboltmusic",
    handle: "@jimboltmusic",
  },
  {
    name: "YouTube",
    icon: Video,
    url: "https://www.youtube.com/@jimboltmusic",
    handle: "@jimboltmusic",
  },
  {
    name: "Apple Music",
    icon: Music,
    url: "https://music.apple.com/us/artist/jim-bolt/1731613696",
    handle: "Jim Bolt",
  },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  function handleOpenChange(isOpen: boolean) {
    setOpen(isOpen);
    if (!isOpen) {
      // Reset form state when closing
      setTimeout(() => {
        setStatus("idle");
        setErrorMsg("");
      }, 300);
    }
  }

  return (
    <section id="contact" className="relative py-32 noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold-muted text-sm tracking-[0.25em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gold-gradient mb-4">
            Connect
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interested in booking Jim for your church, conference, or event?
            Have questions about music or merch? Reach out anytime.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Card className="border-gold/20 bg-gradient-to-br from-gold/5 via-card/50 to-card/30 glow-gold">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Book Jim for Your Event
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Whether it&apos;s a Sunday service, a worship night, or a
                conference — Jim and his band would love to come serve your
                community.
              </p>
              <Button
                size="lg"
                className="bg-gold text-gold-foreground hover:bg-gold/90 px-8 gap-2 font-medium"
                onClick={() => setOpen(true)}
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact form dialog */}
        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogContent className="sm:max-w-xl p-0 bg-card border-border/30 overflow-hidden gap-0">
            {/* Header with gradient accent */}
            <div className="relative px-8 pt-8 pb-6 bg-gradient-to-b from-gold/8 via-gold/3 to-transparent">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <DialogHeader className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <DialogTitle className="text-lg font-semibold text-foreground">
                      Send a Message
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground">
                      We&apos;ll get back to you as soon as possible.
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
            </div>

            {status === "success" ? (
              <div className="px-8 py-12 text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm mb-8 max-w-xs mx-auto">
                  Thank you for reaching out. Jim or his team will get back to
                  you soon.
                </p>
                <Button
                  className="bg-gold text-gold-foreground hover:bg-gold/90 px-6"
                  onClick={() => handleOpenChange(false)}
                >
                  Done
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-8 pb-8 pt-2">
                <div className="space-y-5">
                  {/* Name & Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        Name <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="h-11 bg-background/60 border-border/40 placeholder:text-muted-foreground/40 focus-visible:border-gold/50 focus-visible:ring-gold/20 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        Email <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="h-11 bg-background/60 border-border/40 placeholder:text-muted-foreground/40 focus-visible:border-gold/50 focus-visible:ring-gold/20 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Subject <span className="text-gold">*</span>
                    </Label>
                    <Select
                      value={form.subject}
                      onValueChange={(value) =>
                        setForm((prev) => ({ ...prev, subject: value }))
                      }
                      required
                    >
                      <SelectTrigger className="h-11 bg-background/60 border-border/40 text-foreground focus:border-gold/50 focus:ring-gold/20 transition-colors [&>span]:text-muted-foreground/40 [&>span]:data-[placeholder]:text-muted-foreground/40">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border/50">
                        <SelectItem value="Booking Inquiry">Booking Inquiry</SelectItem>
                        <SelectItem value="Question">Question</SelectItem>
                        <SelectItem value="General">General</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Message <span className="text-gold">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your event, ask a question, or just say hello..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background/60 border-border/40 placeholder:text-muted-foreground/40 focus-visible:border-gold/50 focus-visible:ring-gold/20 resize-none transition-colors leading-relaxed"
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
                      <span className="shrink-0">&#9888;</span>
                      {errorMsg}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-8 pt-5 border-t border-border/30">
                  <p className="text-xs text-muted-foreground/60">
                    <span className="text-gold">*</span> Required fields
                  </p>
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground"
                      onClick={() => handleOpenChange(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      size="sm"
                      disabled={status === "sending"}
                      className="bg-gold text-gold-foreground hover:bg-gold/90 gap-2 font-medium px-5"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </DialogContent>
        </Dialog>

        {/* Social links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {socials.map((social, i) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="border-border/50 bg-card/30 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors mx-auto mb-3" />
                    <p className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                      {social.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {social.handle}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
