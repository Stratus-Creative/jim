"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll-to-section";

const SPOTIFY_ARTIST_ID = "609q7Md1MNLgqx6Er2chhR";

export function MusicSection() {
  return (
    <section id="music" className="relative py-32 noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold-muted text-sm tracking-[0.25em] uppercase mb-3">
            Discography
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gold-gradient mb-4">
            The Music
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Over 25 original singles of worship, praise, and heartfelt
            testimony. Listen right here or open in your favorite app.
          </p>
        </motion.div>

        {/* Spotify embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <Card className="overflow-hidden border-border/50 bg-card/30 glow-gold">
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
          </Card>

          <p className="text-center text-xs text-muted-foreground mt-4">
            Click any track to preview &middot;{" "}
            <a
              href={`https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1DB954] hover:underline"
            >
              Open in Spotify
            </a>
          </p>
        </motion.div>

        {/* Streaming platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Also available on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              {
                name: "Apple Music",
                url: "https://music.apple.com/us/artist/jim-bolt/1731613696",
              },
              {
                name: "Amazon Music",
                url: "https://www.amazon.com/music/player/artists/B01LVW1YG9/jim-bolt",
              },
              {
                name: "iHeartRadio",
                url: "https://www.iheart.com/artist/jim-bolt-42418577/",
              },
              { name: "YouTube", url: "/videos", section: "videos" },
            ].map((platform) => (
              <Button
                key={platform.name}
                variant="outline"
                size="sm"
                className="border-border/50 text-muted-foreground hover:text-gold hover:border-gold/30"
                asChild
              >
                <a
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
                >
                  {platform.name}
                </a>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
