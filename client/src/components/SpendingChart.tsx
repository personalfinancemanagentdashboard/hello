import { Card } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", income: 85000, expenses: 52000 },
  { month: "Feb", income: 85000, expenses: 48000 },
  { month: "Mar", income: 90000, expenses: 55000 },
  { month: "Apr", income: 85000, expenses: 51000 },
  { month: "May", income: 85000, expenses: 49000 },
  { month: "Jun", income: 88000, expenses: 53000 },
];

export default function SpendingChart() {
  return (
    <Card className="p-6" data-testid="spending-chart">
      <h3 className="text-lg font-semibold mb-4">Income vs Expenses</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis dataKey="month" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "6px",
            }}
          />
          <Legend />
          <Bar dataKey="income" fill="hsl(var(--chart-1))" name="Income" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expenses" fill="hsl(var(--chart-2))" name="Expenses" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
