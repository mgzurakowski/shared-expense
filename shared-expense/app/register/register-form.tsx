"use client";

import { ChangeEvent, SubmitEvent, useState } from "react";
import FormField from "./form-field";
import type { RegisterErrors, RegisterFields } from "./types";

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

  function validate(): RegisterErrors {
    const errs: RegisterErrors = {};
    if (!fields.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!fields.firstName.trim()) errs.firstName = "First name is required.";
    if (!fields.lastName.trim()) errs.lastName = "Last name is required.";
    if (!fields.password) errs.password = "Password is required.";
    if (!fields.confirmPassword) {
      errs.confirmPassword = "Please confirm your password.";
    } else if (fields.password !== fields.confirmPassword) {
      errs.confirmPassword = "Passwords do not match.";
    }
    return errs;
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const errs = validate();
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
        className="mt-2 cursor-pointer rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors duration-300 hover:bg-zinc-700 dark:bg-zinc-600 dark:text-zinc-50 dark:hover:bg-zinc-500"
      >
        Register
      </button>
    </form>
  );
}
