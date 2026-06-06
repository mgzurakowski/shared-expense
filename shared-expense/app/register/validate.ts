import type { RegisterErrors, RegisterFields } from "./types";

const rules: Array<{
  field: keyof RegisterFields;
  check: (f: RegisterFields) => boolean;
  message: string;
}> = [
  { field: "email",           check: (f) => !f.email.trim(),                             message: "Email is required." },
  { field: "email",           check: (f) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email), message: "Enter a valid email address." },
  { field: "firstName",       check: (f) => !f.firstName.trim(),                         message: "First name is required." },
  { field: "lastName",        check: (f) => !f.lastName.trim(),                          message: "Last name is required." },
  { field: "password",        check: (f) => !f.password,                                 message: "Password is required." },
  { field: "confirmPassword", check: (f) => !f.confirmPassword,                          message: "Please confirm your password." },
  { field: "confirmPassword", check: (f) => f.password !== f.confirmPassword,            message: "Passwords do not match." },
];

export function validate(fields: RegisterFields): RegisterErrors {
  const errs: RegisterErrors = {};
  for (const { field, check, message } of rules) {
    if (!errs[field] && check(fields)) errs[field] = message;
  }
  return errs;
}
