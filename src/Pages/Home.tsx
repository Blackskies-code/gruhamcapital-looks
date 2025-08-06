import { OnlineConsulationForm } from "../Components/OnlineConsulationForm";
import Comparison from "../Components/Comparision";
import { Box } from "@mui/material";
import { Calculators } from "../Components/Calculators";
import { SnackBarContext } from "../Context";
import { useState } from "react";
import { Toast } from "../Common/SnackBar";

export const Home = () => {
  const [message, setMessage] = useState("");
  const [toastVariant, setToastVariant] = useState<
    "success" | "info" | "error" | "warning"
  >("info");
  return (
    <SnackBarContext.Provider value={{ message, setMessage, setToastVariant }}>
      <Box pt={10} pb={5}>
        <OnlineConsulationForm />
        <Calculators />
        <Comparison />
      </Box>
      {message.length && (
        <Toast
          message={message}
          showSnackbar={!!message}
          toastVariant={toastVariant}
        />
      )}
    </SnackBarContext.Provider>
  );
};
