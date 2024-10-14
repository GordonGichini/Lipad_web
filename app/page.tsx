import Contact from "@/app/components/Contact";
import ThumbnailVideo from "@/app/components/ThumbnailVideo";
import LipadFeatures from "@/app/components/LipadFeatures";
import DiscoverLipad from "@/app/components/DiscoverLipad";
import HeroSection from "@/app/components/HeroSection";

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col">

        {/*<CarouselHero />*/}
        {/*  <Contact />*/}
          <HeroSection />
          <DiscoverLipad />
          <ThumbnailVideo />
          <LipadFeatures />

      </div>
  )
}
