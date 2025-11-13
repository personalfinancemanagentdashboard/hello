import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target } from "lucide-react";

interface GoalCardProps {
  title: string;
  current: number;
  target: number;
  deadline?: string;
}

export default function GoalCard({ title, current, target, deadline }: GoalCardProps) {
  const percentage = (current / target) * 100;

  return (
    <Card className="p-6" data-testid={`goal-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          {deadline && (
            <p className="text-sm text-muted-foreground mt-1">Target: {deadline}</p>
          )}
        </div>
        <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center">
          <Target className="w-5 h-5" />
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-baseline">
          <span className="text-2xl font-mono font-bold">₹{current.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">of ₹{target.toLocaleString()}</span>
        </div>
        <Progress value={percentage} className="h-2" />
        <p className="text-sm text-muted-foreground text-right">{percentage.toFixed(1)}% complete</p>
      </div>
    </Card>
  );
}
