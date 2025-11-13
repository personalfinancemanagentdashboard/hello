import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, AlertCircle } from "lucide-react";
import { format, differenceInDays } from "date-fns";

interface BillCardProps {
  name: string;
  amount: number;
  dueDate: Date;
  category: string;
}

export default function BillCard({ name, amount, dueDate, category }: BillCardProps) {
  const daysUntilDue = differenceInDays(dueDate, new Date());
  const isUrgent = daysUntilDue <= 5 && daysUntilDue >= 0;
  const isOverdue = daysUntilDue < 0;

  return (
    <Card className="p-4" data-testid={`bill-card-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold">{name}</h3>
            {(isUrgent || isOverdue) && (
              <AlertCircle className="w-4 h-4 text-destructive" />
            )}
          </div>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
        
        <div className="text-right">
          <p className="font-mono font-semibold text-lg">₹{amount.toLocaleString()}</p>
          <div className="flex items-center gap-1 mt-1">
            <Calendar className="w-3 h-3 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">{format(dueDate, "MMM dd")}</p>
          </div>
        </div>
      </div>
      
      {isOverdue && (
        <Badge variant="destructive" className="mt-3 text-xs">
          Overdue by {Math.abs(daysUntilDue)} days
        </Badge>
      )}
      {isUrgent && !isOverdue && (
        <Badge variant="destructive" className="mt-3 text-xs">
          Due in {daysUntilDue} {daysUntilDue === 1 ? 'day' : 'days'}
        </Badge>
      )}
    </Card>
  );
}
