import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import GalleryPreview from "@/components/GalleryPreview";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import AdmissionBanner from "@/components/AdmissionBanner";
import ContactSection from "@/components/ContactSection";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseSection />
      <GalleryPreview />
      <TestimonialsCarousel />
      <AdmissionBanner />
      <ContactSection />
      <Newsletter />
    </>
  );
}
