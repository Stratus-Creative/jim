"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Mic } from "lucide-react";
import { motion } from "framer-motion";

const videos = [
  { id: "AZVxfSAnGvo", title: "I Live to Worship You" },
  { id: "iN3ANZFpurw", title: "Faithful God" },
  { id: "EEcCXyzvKPU", title: "Glory in the Highest" },
  { id: "GFhKoXBbKmQ", title: "Forgiven (Live)" },
  { id: "O2KUGPqY90Q", title: "Dancing in the Night" },
  { id: "OFBNkwqxJWo", title: "Peace in God" },
];

export function VideosSection() {
  const [featured, setFeatured] = useState(videos[0]);

  return (
    <section id="videos" className="relative py-32 noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold-muted text-sm tracking-[0.25em] uppercase mb-3">
            Watch
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gold-gradient mb-4">
            Live &amp; In Studio
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Watch Jim worship live, hear new songs, and experience the heart
            behind the music.
          </p>
        </motion.div>

        {/* Featured video player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden border-border/50 bg-card/50 glow-gold">
            <div className="aspect-video relative">
              <iframe
                src={`https://www.youtube.com/embed/${featured.id}?rel=0&modestbranding=1`}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </Card>
          <p className="text-center text-sm text-foreground font-medium mt-4">
            {featured.title}
          </p>
        </motion.div>

        {/* Video selector grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 max-w-4xl mx-auto">
          {videos.map((video, i) => (
            <motion.div
              key={`${video.id}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <button
                onClick={() => setFeatured(video)}
                className={`group w-full text-left rounded-lg overflow-hidden border transition-all duration-300 ${
                  featured.id === video.id && featured.title === video.title
                    ? "border-gold/50 ring-1 ring-gold/20"
                    : "border-border/50 hover:border-gold/30"
                }`}
              >
                {/* Thumbnail */}
                <div className="aspect-video relative bg-black">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        featured.id === video.id &&
                        featured.title === video.title
                          ? "bg-gold text-gold-foreground scale-100"
                          : "bg-black/50 text-white/80 scale-90 group-hover:scale-100 group-hover:bg-gold group-hover:text-gold-foreground"
                      }`}
                    >
                      <Play className="w-3.5 h-3.5 ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-2.5 bg-card/50">
                  <p
                    className={`text-xs font-medium line-clamp-1 transition-colors ${
                      featured.id === video.id &&
                      featured.title === video.title
                        ? "text-gold"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {video.title}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Studio credit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto mt-14"
        >
          <a
            href="https://thepointofimpactstudios.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative rounded-xl border border-border/40 bg-card/30 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-colors">
                  <Mic className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gold-muted uppercase tracking-wider mb-1">
                    Recorded at
                  </p>
                  <p className="text-base font-semibold text-foreground group-hover:text-gold transition-colors">
                    Point of Impact Studios
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Professional recording &amp; production
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-gold transition-colors shrink-0" />
              </div>
            </div>
          </a>
        </motion.div>

        {/* YouTube CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
          <Button
            variant="outline"
            className="border-gold/30 text-gold hover:bg-gold/10 gap-2"
            asChild
          >
            <a
              href="https://www.youtube.com/@jimboltmusic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="w-4 h-4" />
              Visit YouTube Channel
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
