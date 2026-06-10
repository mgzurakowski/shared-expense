import { defaultFields } from "./constants";

export type LoginFields = typeof defaultFields;
export type LoginErrors = Partial<Record<keyof LoginFields, string>>;
