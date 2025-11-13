import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Home, Zap, Car, Coffee, MoreHorizontal } from "lucide-react";

const categoryIcons = {
  Food: Coffee,
  Rent: Home,
  Bills: Zap,
  Transport: Car,
  Entertainment: ShoppingCart,
  Other: MoreHorizontal,
};

interface BudgetCardProps {
  category: keyof typeof categoryIcons;
  spent: number;
  total: number;
}

export default function BudgetCard({ category, spent, total }: BudgetCardProps) {
  const percentage = (spent / total) * 100;
  const isWarning = percentage >= 80;
  const Icon = categoryIcons[category];

  return (
    <Card className="p-4" data-testid={`budget-card-${category.toLowerCase()}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold">{category}</h3>
        </div>
        {isWarning && (
          <Badge variant="destructive" className="text-xs">
            {percentage.toFixed(0)}%
          </Badge>
        )}
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Spent</span>
          <span className="font-mono font-semibold">₹{spent.toLocaleString()} / ₹{total.toLocaleString()}</span>
        </div>
        <Progress value={percentage} className="h-2" />
      </div>
    </Card>
  );
}
