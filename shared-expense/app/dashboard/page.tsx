import type { Metadata } from "next";
import clsx from "clsx/lite";
import { groups, recentExpenses, summaryStats } from "./constants";
import { formatAmount } from "./format";
import ExpenseRow from "./expense-row";
import GroupCard from "./group-card";
import InviteFriends from "./invite-friends";

export const metadata: Metadata = {
  title: "Dashboard",
};

const cardClass =
  "rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-800";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-4 py-12 dark:bg-zinc-900">
      <div className="flex w-full max-w-3xl flex-col gap-8">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Dashboard
          </h1>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {summaryStats.map((stat) => {
            const tone =
              stat.tone === "auto"
                ? stat.amount > 0
                  ? "positive"
                  : stat.amount < 0
                    ? "negative"
                    : "neutral"
                : stat.tone;
            return (
              <div key={stat.label} className={cardClass}>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </p>
                <p
                  className={clsx(
                    "mt-2 text-2xl font-semibold",
                    tone === "positive" &&
                      "text-emerald-600 dark:text-emerald-400",
                    tone === "negative" && "text-red-600 dark:text-red-400",
                    tone === "neutral" && "text-zinc-400 dark:text-zinc-500"
                  )}
                >
                  {formatAmount(stat.amount)}
                </p>
              </div>
            );
          })}
        </section>

        <section className={cardClass}>
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Twoje grupy
          </h2>
          <ul className="flex flex-col gap-3">
            {groups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </ul>
        </section>

        <section className={cardClass}>
          <h2 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Zaproś znajomych
          </h2>
          <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
            Wyślij zaproszenie e-mailem, aby zacząć dzielić wydatki.
          </p>
          <InviteFriends />
        </section>

        <section className={cardClass}>
          <h2 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Ostatnie wydatki
          </h2>
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-700">
            {recentExpenses.map((expense) => (
              <ExpenseRow key={expense.id} expense={expense} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
