import clsx from "clsx/lite";
import { formatSignedAmount } from "./format";
import type { Group } from "./types";

export default function GroupCard({ group }: { group: Group }) {
  const { name, memberCount, balance } = group;

  return (
    <li className="flex items-center justify-between rounded-xl border border-zinc-200 px-4 py-3 dark:border-zinc-700">
      <div>
        <p className="font-medium text-zinc-900 dark:text-zinc-50">{name}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {memberCount} członków
        </p>
      </div>
      <span
        className={clsx(
          "text-sm font-medium",
          balance > 0 && "text-emerald-600 dark:text-emerald-400",
          balance < 0 && "text-red-600 dark:text-red-400",
          balance === 0 && "text-zinc-500 dark:text-zinc-400"
        )}
      >
        {balance === 0 ? "Rozliczone" : formatSignedAmount(balance)}
      </span>
    </li>
  );
}
