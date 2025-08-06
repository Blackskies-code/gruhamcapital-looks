import { createContext } from "react";

interface ISnackBarContext {
  message: string;
  setMessage: (msg: string) => void;
  setToastVariant: (msg: "success" | "info" | "warning" | "error") => void;
}

export const SnackBarContext = createContext<ISnackBarContext | null>(null); // null is the default value
