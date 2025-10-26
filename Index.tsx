import { Hero } from "@/components/Hero";
import { TextAnalyzer } from "@/components/TextAnalyzer";
import { VisualizationDashboard } from "@/components/VisualizationDashboard";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TextAnalyzer />
      <VisualizationDashboard />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
