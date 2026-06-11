import type { Expense, Group, SummaryStat } from "./types";

export const summaryStats: SummaryStat[] = [
  { label: "Twoje saldo", amount: 124.5, tone: "auto" },
  { label: "Należne Tobie", amount: 210.0, tone: "neutral" },
  { label: "Twój dług", amount: 85.5, tone: "neutral" },
];

export const groups: Group[] = [
  { id: "g1", name: "Wyjazd w góry", memberCount: 5, balance: 64.0 },
  { id: "g2", name: "Mieszkanie", memberCount: 3, balance: -42.5 },
  { id: "g3", name: "Biuro – lunch", memberCount: 8, balance: 12.0 },
  { id: "g4", name: "Urodziny Ani", memberCount: 6, balance: 0 },
];

export const recentExpenses: Expense[] = [
  {
    id: "e1",
    description: "Zakupy spożywcze",
    paidBy: "Ty",
    amount: 156.3,
    timestamp: Date.UTC(2026, 5, 9, 18, 30),
  },
  {
    id: "e2",
    description: "Bilety na wyciąg",
    paidBy: "Marek",
    amount: 240.0,
    timestamp: Date.UTC(2026, 5, 8, 9, 15),
  },
  {
    id: "e3",
    description: "Pizza w piątek",
    paidBy: "Kasia",
    amount: 88.5,
    timestamp: Date.UTC(2026, 5, 6, 20, 45),
  },
  {
    id: "e4",
    description: "Rachunek za prąd",
    paidBy: "Ty",
    amount: 312.0,
    timestamp: Date.UTC(2026, 5, 3, 7, 0),
  },
];
