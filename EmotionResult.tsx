import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smile, Frown, Flame, Ghost, Zap } from "lucide-react";

type Emotion = "joy" | "sadness" | "anger" | "fear" | "surprise";

interface EmotionResultProps {
  emotion: Emotion;
  confidence: number;
}

const emotionConfig = {
  joy: {
    emoji: "😊",
    icon: Smile,
    label: "Joy",
    color: "bg-emotion-joy",
    textColor: "text-yellow-900",
    borderColor: "border-emotion-joy",
  },
  sadness: {
    emoji: "😢",
    icon: Frown,
    label: "Sadness",
    color: "bg-emotion-sadness",
    textColor: "text-blue-900",
    borderColor: "border-emotion-sadness",
  },
  anger: {
    emoji: "😠",
    icon: Flame,
    label: "Anger",
    color: "bg-emotion-anger",
    textColor: "text-red-900",
    borderColor: "border-emotion-anger",
  },
  fear: {
    emoji: "😨",
    icon: Ghost,
    label: "Fear",
    color: "bg-emotion-fear",
    textColor: "text-purple-900",
    borderColor: "border-emotion-fear",
  },
  surprise: {
    emoji: "😲",
    icon: Zap,
    label: "Surprise",
    color: "bg-emotion-surprise",
    textColor: "text-pink-900",
    borderColor: "border-emotion-surprise",
  },
};

export const EmotionResult = ({ emotion, confidence }: EmotionResultProps) => {
  const config = emotionConfig[emotion];
  const Icon = config.icon;

  return (
    <Card className={`border-2 ${config.borderColor} overflow-hidden`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`${config.color} p-3 rounded-xl`}>
              <Icon className={`w-6 h-6 ${config.textColor}`} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{config.label}</h3>
              <p className="text-sm text-muted-foreground">Detected Emotion</p>
            </div>
          </div>
          <span className="text-4xl">{config.emoji}</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Confidence</span>
            <span className="font-semibold">{confidence}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <div
              className={`h-full ${config.color} transition-all duration-1000 ease-out`}
              style={{ width: `${confidence}%` }}
            />
          </div>
        </div>

        <Badge className={`mt-4 ${config.color} ${config.textColor} border-0`}>
          High Confidence Detection
        </Badge>
      </CardContent>
    </Card>
  );
};
