"use client";

import clsx from "clsx/lite";
import { ChangeEvent, SubmitEvent, useState } from "react";

export default function InviteFriends() {
  const [email, setEmail] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    alert(`Zaproszenie wysłane do: ${email}`);
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        name="inviteEmail"
        placeholder="znajomy@example.com"
        value={email}
        onChange={handleChange}
        className={clsx(
          "flex-1 rounded-full border border-zinc-300 px-4 py-2.5",
          "text-sm text-zinc-900 placeholder:text-zinc-400",
          "focus:border-zinc-500 focus:outline-none",
          "dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50"
        )}
      />
      <button
        type="submit"
        className={clsx(
          "rounded-full px-6 py-2.5",
          "text-sm font-medium text-background dark:text-zinc-50",
          "bg-foreground hover:bg-zinc-700 dark:bg-zinc-600 dark:hover:bg-zinc-500",
          "cursor-pointer transition-colors duration-300"
        )}
      >
        Wyślij zaproszenie
      </button>
    </form>
  );
}
