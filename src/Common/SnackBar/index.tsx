import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

interface IToastProps {
  showSnackbar: boolean;
  message: string;
  toastVariant: "success" | "error" | "warning" | "info";
}

export const Toast = ({ showSnackbar, message, toastVariant }: IToastProps) => {
  const [isOpen, setIsOpen] = useState(showSnackbar);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <Alert
        onClose={handleClose}
        severity={toastVariant}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
