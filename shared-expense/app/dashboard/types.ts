export type SummaryStat = {
  label: string;
  amount: number;
  tone: "neutral" | "positive" | "negative" | "auto";
};

export type Group = {
  id: string;
  name: string;
  memberCount: number;
  balance: number;
};

export type Expense = {
  id: string;
  description: string;
  paidBy: string;
  amount: number;
  /** Unix timestamp in milliseconds (UTC). Rendered in the user's local timezone. */
  timestamp: number;
};
