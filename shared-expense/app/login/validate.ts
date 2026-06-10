import type { LoginErrors, LoginFields } from "./types";

const rules: Array<{
  field: keyof LoginFields;
  check: (f: LoginFields) => boolean;
  message: string;
}> = [
  { field: "email", check: (f) => !f.email.trim(), message: "Email is required." },
  { field: "email", check: (f) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email), message: "Enter a valid email address." },
  { field: "password", check: (f) => !f.password, message: "Password is required." },
];

export function validate(fields: LoginFields): LoginErrors {
  const errs: LoginErrors = {};
  for (const { field, check, message } of rules) {
    if (!errs[field] && check(fields)) errs[field] = message;
  }
  return errs;
}
