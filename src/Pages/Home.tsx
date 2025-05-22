import { OnlineConsulationForm } from "../Components/OnlineConsulationForm";
import Comparison from "../Components/Comparision";
import { Box } from "@mui/material";
import { Calculators } from "../Components/Calculators";

export const Home = () => {
  return (
    <Box pt={5} pb={5}>
      <OnlineConsulationForm />
      <Calculators />
      <Comparison />
    </Box>
  );
};
