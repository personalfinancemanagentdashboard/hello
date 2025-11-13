import { ShoppingCart, Home, Zap, Car, Coffee, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";

const categoryIcons = {
  Food: Coffee,
  Rent: Home,
  Bills: Zap,
  Transport: Car,
  Entertainment: ShoppingCart,
  Other: MoreHorizontal,
};

const categoryColors = {
  Food: "bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400",
  Rent: "bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400",
  Bills: "bg-yellow-100 dark:bg-yellow-950 text-yellow-600 dark:text-yellow-400",
  Transport: "bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400",
  Entertainment: "bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400",
  Other: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
};

interface TransactionRowProps {
  id: string;
  title: string;
  category: keyof typeof categoryIcons;
  amount: number;
  date: Date;
  type: "income" | "expense";
}

export default function TransactionRow({ title, category, amount, date, type }: TransactionRowProps) {
  const Icon = categoryIcons[category];
  
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0" data-testid={`transaction-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${categoryColors[category]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{format(date, "MMM dd, yyyy")}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-mono font-semibold ${type === "income" ? "text-green-600 dark:text-green-500" : "text-foreground"}`}>
          {type === "income" ? "+" : "-"}₹{amount.toLocaleString()}
        </p>
        <p className="text-sm text-muted-foreground">{category}</p>
      </div>
    </div>
  );
}
