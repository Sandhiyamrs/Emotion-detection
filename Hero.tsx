import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToAnalyzer = () => {
    document.getElementById("analyzer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium text-primary">
          <Sparkles className="w-4 h-4" />
          <span>AI-Powered Emotion Analysis</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
          Decoding Emotions
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          AI-Powered Social Media Emotion Detection System
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Understand the emotional landscape of social media content with advanced AI analysis
        </p>
        
        <Button
          size="lg"
          onClick={scrollToAnalyzer}
          className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
        >
          Analyze Text
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};
