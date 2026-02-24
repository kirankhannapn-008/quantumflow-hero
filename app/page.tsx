import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import ThreeSection from "../components/ThreeSection";
import ValueSection from "../components/ValueSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureSection />
      <ThreeSection />
      <ValueSection />
      <Footer />
    </main>
  );
}