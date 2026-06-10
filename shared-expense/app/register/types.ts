import { defaultFields } from "./constants";

export type RegisterFields = typeof defaultFields;
export type RegisterErrors = Partial<Record<keyof RegisterFields, string>>;
