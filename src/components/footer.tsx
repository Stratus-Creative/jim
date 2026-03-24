"use client";

import { Separator } from "@/components/ui/separator";
import { Music, Heart } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to-section";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-card/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => scrollToSection("home", e)}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <Music className="w-4 h-4 text-gold" />
            </div>
            <span className="text-lg font-semibold text-gold-gradient">
              Jim Bolt
            </span>
          </a>

          {/* Nav */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Music", "Videos", "Merch", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                onClick={(e) => scrollToSection(link.toLowerCase(), e)}
                className="text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jim Bolt Music. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-gold fill-gold" /> for His glory
          </p>
        </div>
      </div>
    </footer>
  );
}
