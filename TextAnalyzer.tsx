import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { EmotionResult } from "./EmotionResult";
import { toast } from "sonner";

type Emotion = "joy" | "sadness" | "anger" | "fear" | "surprise" | null;

export const TextAnalyzer = () => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [detectedEmotion, setDetectedEmotion] = useState<Emotion>(null);
  const [confidence, setConfidence] = useState<number>(0);

  const analyzeText = async () => {
    if (!text.trim()) {
      toast.error("Please enter some text to analyze");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - replace with actual API endpoint
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock emotion detection
      const emotions: Emotion[] = ["joy", "sadness", "anger", "fear", "surprise"];
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
      const randomConfidence = Math.floor(Math.random() * 30) + 70;
      
      setDetectedEmotion(randomEmotion);
      setConfidence(randomConfidence);
      
      toast.success("Emotion detected successfully!");
    } catch (error) {
      toast.error("Failed to analyze text. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="analyzer" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Text Emotion Detector
          </h2>
          <p className="text-lg text-muted-foreground">
            Paste any social media text to discover the underlying emotions
          </p>
        </div>

        <Card className="backdrop-blur-sm bg-card/80 border-border shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Enter Your Text
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Textarea
              placeholder="Type or paste your social media text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[150px] resize-none text-base"
            />
            
            <Button
              onClick={analyzeText}
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 w-5 h-5" />
                  Analyze Emotion
                </>
              )}
            </Button>

            {detectedEmotion && (
              <div className="animate-scale-in">
                <EmotionResult emotion={detectedEmotion} confidence={confidence} />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
