"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Disc3, Shirt, Package } from "lucide-react";
import { motion } from "framer-motion";

const merchItems = [
  {
    name: "Glory in the Highest — CD",
    price: "$15.00",
    category: "Music",
    icon: Disc3,
    gradient: "from-amber-900/40 via-yellow-950/30 to-stone-900/60",
    badge: "New",
  },
  {
    name: "Faithful God — CD",
    price: "$15.00",
    category: "Music",
    icon: Disc3,
    gradient: "from-indigo-900/40 via-slate-900/30 to-stone-900/60",
    badge: null,
  },
  {
    name: "Jim Bolt Logo Tee — Black",
    price: "$28.00",
    category: "Apparel",
    icon: Shirt,
    gradient: "from-stone-800/50 via-zinc-900/40 to-stone-900/60",
    badge: "Popular",
  },
  {
    name: '"I Am Amazed" Lyric Tee',
    price: "$28.00",
    category: "Apparel",
    icon: Shirt,
    gradient: "from-rose-900/40 via-pink-950/30 to-stone-900/60",
    badge: null,
  },
  {
    name: "Worship Collection Bundle",
    price: "$45.00",
    category: "Bundle",
    icon: Package,
    gradient: "from-teal-900/40 via-emerald-950/30 to-stone-900/60",
    badge: "Best Value",
  },
  {
    name: "Jim Bolt Logo Cap",
    price: "$22.00",
    category: "Apparel",
    icon: Shirt,
    gradient: "from-sky-900/40 via-blue-950/30 to-stone-900/60",
    badge: null,
  },
];

export function MerchSection() {
  return (
    <section id="merch" className="relative py-32 noise-overlay">
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
            Shop
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gold-gradient mb-4">
            Merch &amp; Music
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Support the ministry. Every purchase helps spread worship music to
            churches and communities everywhere.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {merchItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden border-border/50 bg-card/50 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5">
                {/* Product image placeholder */}
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${item.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <item.icon className="w-16 h-16 text-white/10 group-hover:text-gold/20 transition-colors duration-500" />
                  </div>
                  {item.badge && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-gold text-gold-foreground border-0 text-xs font-medium">
                        {item.badge}
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <p className="text-xs text-gold-muted uppercase tracking-wider mb-1">
                        {item.category}
                      </p>
                      <h3 className="font-semibold text-foreground group-hover:text-gold transition-colors leading-tight">
                        {item.name}
                      </h3>
                    </div>
                    <span className="text-lg font-bold text-gold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <Button
                    className="w-full bg-gold/10 text-gold border border-gold/20 hover:bg-gold hover:text-gold-foreground transition-all duration-300 gap-2"
                    size="sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
