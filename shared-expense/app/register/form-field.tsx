import clsx from "clsx/lite";
import type { RegisterFields } from "./types";

type FormFieldProps = {
  label: string;
  name: keyof RegisterFields;
  type: "text" | "password" | "email";
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormField({ label, name, type, placeholder, value, error, onChange }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx(
          "rounded-lg border px-3 py-2",
          "text-sm dark:text-zinc-50 dark:bg-zinc-800",
          "outline-none transition-colors duration-300 focus:ring-2 focus:ring-zinc-400",
          error ? "border-red-400 dark:border-red-500" : "border-zinc-300 dark:border-zinc-700"
        )}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
