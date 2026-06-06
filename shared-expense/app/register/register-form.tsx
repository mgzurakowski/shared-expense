"use client";

import clsx from "clsx/lite";
import { ChangeEvent, SubmitEvent, useState } from "react";
import FormField from "./form-field";
import type { RegisterErrors, RegisterFields } from "./types";
import { validate } from "./validate";

const defaultFields: RegisterFields = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [fields, setFields] = useState<RegisterFields>(defaultFields);
  const [errors, setErrors] = useState<RegisterErrors>({});

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
    alert(`Register: ${fields.email}, ${fields.firstName} ${fields.lastName}`);
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
        label="First name"
        name="firstName"
        type="text"
        value={fields.firstName}
        error={errors.firstName}
        onChange={handleChange}
      />
      <FormField
        label="Last name"
        name="lastName"
        type="text"
        value={fields.lastName}
        error={errors.lastName}
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
      <FormField
        label="Confirm password"
        name="confirmPassword"
        type="password"
        value={fields.confirmPassword}
        error={errors.confirmPassword}
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
        Register
      </button>
    </form>
  );
}
