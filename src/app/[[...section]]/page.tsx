import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { MusicSection } from "@/components/music-section";
import { VideosSection } from "@/components/videos-section";
import { MerchSection } from "@/components/merch-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollHandler } from "@/components/scroll-handler";

export function generateStaticParams() {
  return [
    { section: undefined },
    { section: ["music"] },
    { section: ["videos"] },
    { section: ["merch"] },
    { section: ["about"] },
    { section: ["contact"] },
  ];
}

export default function Home() {
  return (
    <main className="flex-1">
      <ScrollHandler />
      <Navigation />
      <Hero />
      <MusicSection />
      <VideosSection />
      <MerchSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
