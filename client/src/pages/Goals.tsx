import GoalCard from "@/components/GoalCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Goals() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Savings Goals</h1>
          <p className="text-muted-foreground mt-1">Track progress towards your financial goals</p>
        </div>
        <Button data-testid="button-add-goal">
          <Plus className="w-4 h-4 mr-2" />
          Add Goal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GoalCard
          title="New Laptop"
          current={45000}
          target={80000}
          deadline="March 2026"
        />
        <GoalCard
          title="Emergency Fund"
          current={125000}
          target={200000}
          deadline="December 2026"
        />
        <GoalCard
          title="Vacation to Goa"
          current={18000}
          target={50000}
          deadline="June 2026"
        />
        <GoalCard
          title="Wedding Savings"
          current={75000}
          target={500000}
          deadline="December 2027"
        />
      </div>
    </div>
  );
}
