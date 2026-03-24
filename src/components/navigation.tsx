"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Music, Disc3, Headphones, ShoppingBag, Radio, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { scrollToSection } from "@/lib/scroll-to-section";

const navLinks = [
  { label: "Home", section: "home" },
  { label: "Videos", section: "videos" },
  { label: "Merch", section: "merch" },
  { label: "About", section: "about" },
  { label: "Contact", section: "contact" },
];

const musicLinks = [
  {
    label: "Apple Music",
    href: "https://music.apple.com/us/artist/jim-bolt/1731613696",
    icon: Music,
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/609q7Md1MNLgqx6Er2chhR?si=ZcpJHQNMSG6ysy120djXgQ",
    icon: Headphones,
  },
  {
    label: "Amazon Music",
    href: "https://www.amazon.com/music/player/artists/B01LVW1YG9/jim-bolt",
    icon: ShoppingBag,
  },
  {
    label: "iHeartRadio",
    href: "https://www.iheart.com/artist/jim-bolt-42418577/",
    icon: Radio,
  },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNav(section: string, e: React.MouseEvent) {
    scrollToSection(section, e);
  }

  function handleMobileNav(section: string, e: React.MouseEvent) {
    setOpen(false);
    scrollToSection(section, e);
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => handleNav("home", e)}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
            <Music className="w-4 h-4 text-gold" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-gold-gradient">
            Jim Bolt
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <a
            href="/"
            onClick={(e) => handleNav("home", e)}
            className="px-4 py-2 text-sm text-muted-foreground hover:text-gold transition-colors rounded-md hover:bg-gold/5"
          >
            Home
          </a>

          {/* Music dropdown */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="group/music px-4 py-2 text-sm text-muted-foreground hover:text-gold transition-colors rounded-md hover:bg-gold/5 flex items-center gap-1 outline-none data-[state=open]:text-gold data-[state=open]:bg-gold/5">
              Music
              <ChevronDown className="w-3 h-3 opacity-50 transition-transform duration-200 group-data-[state=open]/music:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="bg-card/95 backdrop-blur-xl border-border/50"
            >
              {musicLinks.map((link) => (
                <DropdownMenuItem key={link.label} asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <link.icon className="w-4 h-4 text-gold" />
                    {link.label}
                  </a>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <a
                  href="/music"
                  onClick={(e) => handleNav("music", e)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Disc3 className="w-4 h-4 text-gold" />
                  Discography
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.filter((l) => l.label !== "Home").map((link) => (
            <a
              key={link.section}
              href={`/${link.section}`}
              onClick={(e) => handleNav(link.section, e)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-gold transition-colors rounded-md hover:bg-gold/5"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="ml-3 bg-gold text-gold-foreground hover:bg-gold/90 font-medium"
            asChild
          >
            <a
              href="https://open.spotify.com/artist/609q7Md1MNLgqx6Er2chhR?si=ZcpJHQNMSG6ysy120djXgQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen Now
            </a>
          </Button>
        </div>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 bg-background/95 backdrop-blur-xl border-border"
          >
            <div className="flex flex-col gap-1 mt-8">
              <a
                href="/"
                onClick={(e) => handleMobileNav("home", e)}
                className="px-4 py-3 text-base text-muted-foreground hover:text-gold hover:bg-gold/5 rounded-lg transition-colors"
              >
                Home
              </a>

              {/* Music streaming links */}
              <p className="px-4 pt-4 pb-1 text-xs text-gold-muted uppercase tracking-wider">
                Listen
              </p>
              {musicLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base text-muted-foreground hover:text-gold hover:bg-gold/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/music"
                onClick={(e) => handleMobileNav("music", e)}
                className="px-4 py-3 text-base text-muted-foreground hover:text-gold hover:bg-gold/5 rounded-lg transition-colors"
              >
                Discography
              </a>

              <p className="px-4 pt-4 pb-1 text-xs text-gold-muted uppercase tracking-wider">
                Explore
              </p>
              {navLinks.filter((l) => l.label !== "Home").map((link) => (
                <a
                  key={link.section}
                  href={`/${link.section}`}
                  onClick={(e) => handleMobileNav(link.section, e)}
                  className="px-4 py-3 text-base text-muted-foreground hover:text-gold hover:bg-gold/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button className="mt-4 bg-gold text-gold-foreground hover:bg-gold/90" asChild>
                <a
                  href="https://open.spotify.com/artist/609q7Md1MNLgqx6Er2chhR?si=ZcpJHQNMSG6ysy120djXgQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen Now
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
