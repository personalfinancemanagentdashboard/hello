import { Card } from "@/components/ui/card";
import { Pie, PieChart, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Food", value: 8500, color: "hsl(var(--chart-4))" },
  { name: "Rent", value: 15000, color: "hsl(var(--chart-2))" },
  { name: "Bills", value: 4200, color: "hsl(var(--chart-3))" },
  { name: "Transport", value: 2400, color: "hsl(var(--chart-1))" },
  { name: "Entertainment", value: 1800, color: "hsl(var(--chart-5))" },
];

export default function CategoryPieChart() {
  return (
    <Card className="p-6" data-testid="category-pie-chart">
      <h3 className="text-lg font-semibold mb-4">Spending by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "6px",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}
