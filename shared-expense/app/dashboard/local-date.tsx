"use client";

import { useEffect, useState } from "react";
import { formatDate } from "./format";

/**
 * Renders a timestamp as a date. On the server it uses the server's timezone;
 * after mount it re-formats in the visitor's local timezone. `suppressHydrationWarning`
 * silences the expected SSR/client text mismatch when the two timezones differ.
 */
export default function LocalDate({ timestamp }: { timestamp: number }) {
  const [text, setText] = useState(() => formatDate(timestamp));

  useEffect(() => {
    setText(formatDate(timestamp));
  }, [timestamp]);

  return (
    <time dateTime={new Date(timestamp).toISOString()} suppressHydrationWarning>
      {text}
    </time>
  );
}
