const currency = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
});

export function formatAmount(amount: number) {
  return currency.format(amount);
}

export function formatSignedAmount(amount: number) {
  const sign = amount > 0 ? "+" : "";
  return `${sign}${currency.format(amount)}`;
}

const dateFormatter = new Intl.DateTimeFormat("pl-PL", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

/**
 * Formats a Unix timestamp (ms) using the runtime's local timezone — the
 * server's on SSR, the browser's once `LocalDate` re-renders on the client.
 */
export function formatDate(timestamp: number) {
  return dateFormatter.format(timestamp);
}
