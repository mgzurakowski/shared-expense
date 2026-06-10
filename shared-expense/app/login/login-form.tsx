"use client";

import clsx from "clsx/lite";
import { ChangeEvent, SubmitEvent, useState } from "react";
import { defaultFields } from "./constants";
import FormField from "../register/form-field";
import type { LoginErrors, LoginFields } from "./types";
import { validate } from "./validate";

export default function LoginForm() {
  const [fields, setFields] = useState<LoginFields>(defaultFields);
  const [errors, setErrors] = useState<LoginErrors>({});

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    alert(`Login: ${fields.email}`);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="you@example.com"
        value={fields.email}
        error={errors.email}
        onChange={handleChange}
      />
      <FormField
        label="Password"
        name="password"
        type="password"
        value={fields.password}
        error={errors.password}
        onChange={handleChange}
      />
      <button
        type="submit"
        className={clsx(
          "mt-2 rounded-full px-6 py-3",
          "text-sm font-medium text-background dark:text-zinc-50",
          "bg-foreground hover:bg-zinc-700 dark:bg-zinc-600 dark:hover:bg-zinc-500",
          "cursor-pointer transition-colors duration-300"
        )}
      >
        Login
      </button>
    </form>
  );
}
