"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Disc3, Shirt, Package, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface MerchItem {
  name: string;
  price: string;
  category: string;
  icon: LucideIcon;
  badge: string | null;
  description: string;
}

const featuredItem: MerchItem = {
  name: "Worship Bundle",
  price: "$38.00",
  category: "Bundle",
  icon: Package,
  badge: "Best Value",
  description:
    "The complete package — includes the I Am Amazed By Your Love CD, a Jim Bolt logo tee, and a handwritten thank-you note from Jim. Save when you bundle.",
};

const merchItems: MerchItem[] = [
  {
    name: "I Am Amazed By Your Love — CD",
    price: "$15.00",
    category: "Music",
    icon: Disc3,
    badge: "Original",
    description:
      "Jim's debut album on physical disc. Professionally recorded at Point of Impact Studios. Includes liner notes with lyrics.",
  },
  {
    name: "Jim Bolt Logo Tee — Black",
    price: "$28.00",
    category: "Apparel",
    icon: Shirt,
    badge: "Popular",
    description:
      "Premium soft-touch cotton with gold foil Jim Bolt logo. Unisex relaxed fit. Available in S–3XL.",
  },
];

function ProductCard({ item, index }: { item: MerchItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Card className="group relative h-full border-border/30 bg-card/40 backdrop-blur-sm hover:border-gold/25 transition-all duration-500 hover:shadow-xl hover:shadow-gold/[0.03] hover:-translate-y-1 overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent group-hover:via-gold/30 transition-colors duration-500" />

        <CardContent className="p-6 flex flex-col h-full">
          {/* Icon + Badge row */}
          <div className="flex items-start justify-between mb-5">
            <div className="w-14 h-14 rounded-xl bg-gold/[0.06] border border-gold/10 flex items-center justify-center group-hover:bg-gold/[0.1] group-hover:border-gold/20 transition-all duration-500">
              <item.icon className="w-6 h-6 text-gold/50 group-hover:text-gold/80 transition-colors duration-500" />
            </div>
            {item.badge && (
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gold/80 bg-gold/[0.08] border border-gold/15 px-2.5 py-1 rounded-full">
                {item.badge}
              </span>
            )}
          </div>

          {/* Category */}
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 mb-2">
            {item.category}
          </p>

          {/* Name */}
          <h3 className="text-base font-semibold text-foreground group-hover:text-gold transition-colors duration-300 leading-snug mb-2">
            {item.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground/70 leading-relaxed mb-6 flex-1">
            {item.description}
          </p>

          {/* Price + CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-border/20">
            <span className="text-xl font-bold text-gold tracking-tight">
              {item.price}
            </span>
            <Button
              size="sm"
              className="bg-transparent text-gold/80 border border-gold/20 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-all duration-300 gap-1.5 px-4"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function MerchSection() {
  return (
    <section id="merch" className="relative py-36 noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/15 to-background" />

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
            Shop
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gold-gradient mb-5">
            Merch &amp; Music
          </h2>
          <div className="w-12 h-px bg-gold/30 mx-auto mb-5" />
          <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
            Support the ministry. Every purchase helps spread worship music to
            churches and communities everywhere.
          </p>
        </motion.div>

        {/* Featured item — hero card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Card className="group relative border-gold/15 bg-gradient-to-br from-gold/[0.04] via-card/60 to-card/40 backdrop-blur-sm hover:border-gold/30 transition-all duration-500 overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <CardContent className="p-8 sm:p-10 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                {/* Icon area */}
                <div className="shrink-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gold/[0.06] border border-gold/15 flex items-center justify-center group-hover:bg-gold/[0.1] transition-all duration-500">
                    <Package className="w-10 h-10 md:w-12 md:h-12 text-gold/40 group-hover:text-gold/70 transition-colors duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                      {featuredItem.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-gold/80 bg-gold/[0.08] border border-gold/15 px-2.5 py-1 rounded-full">
                      <Star className="w-2.5 h-2.5 fill-gold/80" />
                      {featuredItem.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-gold transition-colors duration-300 mb-3">
                    {featuredItem.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xl mb-6">
                    {featuredItem.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-3xl font-bold text-gold tracking-tight">
                      {featuredItem.price}
                    </span>
                    <Button
                      size="lg"
                      className="bg-gold text-gold-foreground hover:bg-gold/90 gap-2 px-6 font-medium glow-gold"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {merchItems.map((item, i) => (
            <ProductCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
