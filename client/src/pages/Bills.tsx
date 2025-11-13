import BillCard from "@/components/BillCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Bills() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Bill Reminders</h1>
          <p className="text-muted-foreground mt-1">Never miss a payment deadline</p>
        </div>
        <Button data-testid="button-add-bill">
          <Plus className="w-4 h-4 mr-2" />
          Add Bill
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BillCard
          name="Electricity Bill"
          amount={1850}
          dueDate={new Date(2025, 10, 15)}
          category="Utilities"
        />
        <BillCard
          name="Internet"
          amount={999}
          dueDate={new Date(2025, 10, 13)}
          category="Utilities"
        />
        <BillCard
          name="Credit Card"
          amount={12500}
          dueDate={new Date(2025, 10, 20)}
          category="Credit"
        />
        <BillCard
          name="Mobile Recharge"
          amount={599}
          dueDate={new Date(2025, 10, 18)}
          category="Utilities"
        />
        <BillCard
          name="Gas Bill"
          amount={450}
          dueDate={new Date(2025, 10, 22)}
          category="Utilities"
        />
        <BillCard
          name="Insurance Premium"
          amount={3500}
          dueDate={new Date(2025, 10, 25)}
          category="Insurance"
        />
      </div>
    </div>
  );
}
