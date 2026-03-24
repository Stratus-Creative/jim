"use client";

import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll-to-section";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.22_0.03_75)_0%,oklch(0.13_0.005_260)_60%,oklch(0.10_0.005_260)_100%)]" />

      {/* Subtle cross/light ray effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[60%] bg-gradient-to-b from-gold/20 via-gold/5 to-transparent" />
        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/8 to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-gold-muted text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Worship Artist &middot; Greenville, SC
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] mb-8"
        >
          <span className="text-gold-gradient">Jim</span>
          <br />
          <span className="text-foreground">Bolt</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Original worship music born from a testimony of faith lost and
          restored. Lifting hearts and hands to the One who never let go.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-gold text-gold-foreground hover:bg-gold/90 glow-gold px-8 text-base font-medium gap-2"
            asChild
          >
            <a
              href="https://open.spotify.com/artist/609q7Md1MNLgqx6Er2chhR?si=ZcpJHQNMSG6ysy120djXgQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="w-4 h-4" />
              Listen on Spotify
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50 px-8 text-base"
            asChild
          >
            <a href="/merch" onClick={(e) => scrollToSection("merch", e)}>Shop Merch</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="/music"
        onClick={(e) => scrollToSection("music", e)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold-muted hover:text-gold transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
