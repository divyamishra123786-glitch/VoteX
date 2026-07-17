import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import VotingProcess from "../components/VotingProcess";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
            <VotingProcess />
      <TestimonialSection />

      <Footer />
    </>
  );
}

export default Home;