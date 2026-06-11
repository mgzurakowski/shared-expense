import { formatAmount } from "./format";
import LocalDate from "./local-date";
import type { Expense } from "./types";

export default function ExpenseRow({ expense }: { expense: Expense }) {
  const { description, paidBy, amount, timestamp } = expense;

  return (
    <li className="flex items-center justify-between py-3">
      <div>
        <p className="font-medium text-zinc-900 dark:text-zinc-50">
          {description}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Opłacone przez: {paidBy} · <LocalDate timestamp={timestamp} />
        </p>
      </div>
      <span className="font-medium text-zinc-900 dark:text-zinc-50">
        {formatAmount(amount)}
      </span>
    </li>
  );
}
