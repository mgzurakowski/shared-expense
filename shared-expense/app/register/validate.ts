import type { RegisterErrors, RegisterFields } from "./types";

export function validate(fields: RegisterFields): RegisterErrors {
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
