import BudgetCard from "@/components/BudgetCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Budgets() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Budgets</h1>
          <p className="text-muted-foreground mt-1">Track your spending against monthly budgets</p>
        </div>
        <Button data-testid="button-add-budget">
          <Plus className="w-4 h-4 mr-2" />
          Add Budget
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BudgetCard category="Food" spent={8500} total={10000} />
        <BudgetCard category="Transport" spent={2400} total={5000} />
        <BudgetCard category="Bills" spent={4200} total={5000} />
        <BudgetCard category="Entertainment" spent={1800} total={3000} />
        <BudgetCard category="Rent" spent={15000} total={15000} />
        <BudgetCard category="Other" spent={3200} total={5000} />
      </div>
    </div>
  );
}
