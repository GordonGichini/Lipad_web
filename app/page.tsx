import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import ThumbnailVideo from "@/app/components/ThumbnailVideo";
import Footer from "@/app/components/Footer";
import LipadFeatures from "@/app/components/LipadFeatures";
import DiscoverLipad from "@/app/components/DiscoverLipad";
import HeroSection from "@/app/components/HeroSection";

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {/*<CarouselHero />*/}
          <HeroSection />
          <DiscoverLipad />
          <ThumbnailVideo />
          <LipadFeatures />
          <Footer />
      </div>
  )
}
