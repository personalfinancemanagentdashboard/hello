import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ScoreComponentProps {
  label: string;
  score: number;
  maxScore: number;
}

function ScoreComponent({ label, score, maxScore }: ScoreComponentProps) {
  const percentage = (score / maxScore) * 100;
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-mono font-semibold">{score}/{maxScore}</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
}

export default function HealthScoreBreakdown() {
  return (
    <Card className="p-6" data-testid="health-score-breakdown">
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Financial Health Score</h3>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-5xl font-bold font-mono">82</span>
            <span className="text-2xl text-muted-foreground">/100</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Excellent</p>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <ScoreComponent label="Savings Ratio" score={33} maxScore={40} />
          <ScoreComponent label="Budget Adherence" score={27} maxScore={30} />
          <ScoreComponent label="Goal Progress" score={22} maxScore={30} />
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground text-center">
            Your financial health is calculated based on your savings rate, budget compliance, and progress towards goals.
          </p>
        </div>
      </div>
    </Card>
  );
}
