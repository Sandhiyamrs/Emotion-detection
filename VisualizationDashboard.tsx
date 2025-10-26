import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, LineChart, Line } from "recharts";
import { TrendingUp, PieChart as PieChartIcon } from "lucide-react";

const emotionData = [
  { name: "Joy", value: 35, color: "hsl(var(--emotion-joy))" },
  { name: "Sadness", value: 20, color: "hsl(var(--emotion-sadness))" },
  { name: "Anger", value: 15, color: "hsl(var(--emotion-anger))" },
  { name: "Fear", value: 18, color: "hsl(var(--emotion-fear))" },
  { name: "Surprise", value: 12, color: "hsl(var(--emotion-surprise))" },
];

const trendData = [
  { date: "Mon", joy: 30, sadness: 15, anger: 10 },
  { date: "Tue", joy: 35, sadness: 18, anger: 12 },
  { date: "Wed", joy: 32, sadness: 20, anger: 15 },
  { date: "Thu", joy: 38, sadness: 17, anger: 13 },
  { date: "Fri", joy: 42, sadness: 14, anger: 11 },
  { date: "Sat", joy: 40, sadness: 16, anger: 14 },
  { date: "Sun", joy: 45, sadness: 12, anger: 10 },
];

export const VisualizationDashboard = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Emotion Analytics
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-time visualization of detected emotions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <Card className="backdrop-blur-sm bg-card/80 border-border shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChartIcon className="w-5 h-5 text-primary" />
                Emotion Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={emotionData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {emotionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card className="backdrop-blur-sm bg-card/80 border-border shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChartIcon className="w-5 h-5 text-primary" />
                Overall Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={emotionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {emotionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Line Chart - Trends */}
          <Card className="backdrop-blur-sm bg-card/80 border-border shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Weekly Emotion Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="joy"
                    stroke="hsl(var(--emotion-joy))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="sadness"
                    stroke="hsl(var(--emotion-sadness))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="anger"
                    stroke="hsl(var(--emotion-anger))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
