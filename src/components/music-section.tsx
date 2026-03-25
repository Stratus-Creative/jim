"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll-to-section";

const SPOTIFY_ARTIST_ID = "609q7Md1MNLgqx6Er2chhR";

const platforms = [
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/jim-bolt/1731613696",
  },
  {
    name: "Spotify",
    url: `https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`,
  },
  {
    name: "Amazon Music",
    url: "https://www.amazon.com/music/player/artists/B01LVW1YG9/jim-bolt",
  },
  {
    name: "iHeartRadio",
    url: "https://www.iheart.com/artist/jim-bolt-42418577/",
  },
  {
    name: "YouTube",
    url: "/videos",
    section: "videos",
  },
];

export function MusicSection() {
  return (
    <section id="music" className="relative py-36 noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold-muted text-[11px] tracking-[0.35em] uppercase mb-4 font-semibold">
            Discography
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gold-gradient mb-5">
            The Music
          </h2>
          <div className="w-12 h-px bg-gold/30 mx-auto mb-5" />
          <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
            Over 25 original singles of worship, praise, and heartfelt
            testimony. Listen right here or open in your favorite app.
          </p>
        </motion.div>

        {/* Spotify embed with premium frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="relative overflow-hidden border-gold/15 bg-card/30 backdrop-blur-sm">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            {/* Glow effect behind embed */}
            <div className="absolute -inset-4 bg-gold/[0.03] rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative p-3 sm:p-4">
              <iframe
                src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0`}
                width="100%"
                height="452"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
                title="Spotify player — Jim Bolt"
              />
            </div>
          </Card>

          {/* Spotify link */}
          <p className="text-center text-xs text-muted-foreground/60 mt-5">
            Click any track to preview &middot;{" "}
            <a
              href={`https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1DB954]/80 hover:text-[#1DB954] hover:underline transition-colors"
            >
              Open in Spotify
            </a>
          </p>
        </motion.div>

        {/* Platform pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-muted-foreground/50 mb-5">
            Also available on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target={
                  platform.url.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  platform.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                {...("section" in platform
                  ? {
                      onClick: (e: React.MouseEvent) =>
                        scrollToSection(
                          (platform as { section: string }).section,
                          e,
                        ),
                    }
                  : {})}
                className="px-4 py-2 text-xs font-medium text-muted-foreground/70 bg-card/30 border border-border/30 rounded-full hover:text-gold hover:border-gold/25 hover:bg-gold/[0.04] transition-all duration-300"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
