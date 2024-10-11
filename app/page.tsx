import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import CarouselHero from "@/app/components/CarouselHero";
import FeaturesSection from "@/app/components/FeaturesSection";
import ThumbnailVideo from "@/app/components/ThumbnailVideo";
import PartnerBanks from "@/app/components/PartnerBanks";
import WhyLipad from "@/app/components/WhyLipad";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <CarouselHero />
          <FeaturesSection />
          <ThumbnailVideo />
          <PartnerBanks />
          <WhyLipad />
          <Footer />
      </div>
  )
}
