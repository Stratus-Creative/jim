"use client";

import { Separator } from "@/components/ui/separator";
import { Heart, Church, Mic2, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Mic2,
    label: "Singing Since Age 8",
    desc: "Started performing with his parents at churches across the Southeast",
  },
  {
    icon: Church,
    label: "Church Roots",
    desc: "Raised in the church, guided by a community of faith and prayer",
  },
  {
    icon: Heart,
    label: "Testimony Driven",
    desc: "Every song reflects a journey of losing his way and being brought back by God's love",
  },
  {
    icon: MapPin,
    label: "Greenville, SC",
    desc: "Based in the heart of the Upstate, traveling with his band to share worship",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold-muted text-sm tracking-[0.25em] uppercase mb-3">
              The Story
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gold-gradient mb-8">
              About Jim
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Jim Bolt has been singing since the age of 8, when he first
                joined his parents at churches across the Southeast. What began
                as a shy boy&apos;s trembling voice in front of a congregation grew
                into a powerful calling.
              </p>
              <p>
                As a teenager, Jim experienced what so many do — he lost his way.
                Despite being raised in the church, the pull of the world drew
                him into a season of distance from his faith. But through the
                persistent prayers of his family and the relentless mercy of God,
                Jim found his way home.
              </p>
              <p>
                That journey — from wandering to restoration — is the heartbeat
                of every song he writes. From the deeply personal{" "}
                <span className="text-gold italic">
                  &ldquo;I Am Amazed By Your Love&rdquo;
                </span>{" "}
                to the triumphant{" "}
                <span className="text-gold italic">
                  &ldquo;Glory in the Highest,&rdquo;
                </span>{" "}
                Jim&apos;s music carries the weight of authentic testimony and the joy
                of a life surrendered to worship.
              </p>
              <p>
                Today, Jim travels with his band, leading worship at churches,
                conferences, and events — always with the same goal: to point
                hearts toward the One who never let go.
              </p>
            </div>
          </motion.div>

          {/* Right — Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((item, i) => (
              <div key={item.label}>
                <div className="flex items-start gap-4 py-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                {i < highlights.length - 1 && (
                  <Separator className="bg-border/50" />
                )}
              </div>
            ))}

            {/* Musical influences */}
            <div className="mt-8 p-6 rounded-xl bg-card/50 border border-border/50">
              <p className="text-sm text-gold-muted uppercase tracking-wider mb-3">
                Musical Influences
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "CeCe Winans",
                  "Katy Nichole",
                  "Naomi Raine",
                  "Leanna Crawford",
                ].map((artist) => (
                  <span
                    key={artist}
                    className="px-3 py-1 text-sm rounded-full bg-gold/5 border border-gold/15 text-muted-foreground"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
