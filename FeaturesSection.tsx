import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Globe, TrendingUp, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Model",
    description: "Powered by state-of-the-art deep learning algorithms trained on millions of social media posts",
  },
  {
    icon: Zap,
    title: "Real-time Detection",
    description: "Get instant emotion analysis results with sub-second response times",
  },
  {
    icon: TrendingUp,
    title: "High Accuracy",
    description: "Achieves 92% accuracy on emotion detection with continuous model improvements",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Coming soon: Support for multiple languages and cultural context understanding",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is processed securely and never stored or shared with third parties",
  },
  {
    icon: Sparkles,
    title: "Interactive Dashboard",
    description: "Visualize emotion trends with beautiful, interactive charts and graphs",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge AI technology to provide accurate and insightful emotion detection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="backdrop-blur-sm bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* About Section */}
        <Card className="mt-12 backdrop-blur-sm bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">About the System</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Our emotion detection system uses advanced natural language processing and deep learning 
                techniques to analyze text and identify underlying emotions. The model has been trained on 
                diverse datasets of social media content to understand various communication styles and contexts.
              </p>
              <p className="text-lg text-muted-foreground">
                Currently supporting five primary emotions (Joy, Sadness, Anger, Fear, and Surprise), 
                with plans to expand to more nuanced emotional states and multimodal analysis including images.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
