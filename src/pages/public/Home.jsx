import MainLayout from "../../components/layout/MainLayout";
import HeroSection from "../../components/home/HeroSection";
import ServicesSection from "../../components/home/ServicesSection";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import EmergencyBanner from "../../components/home/EmergencyBanner";
import CommunityCTA from "../../components/home/CommunityCTA";

function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <EmergencyBanner />
      <CommunityCTA />
    </MainLayout>
  );
}

export default Home;
