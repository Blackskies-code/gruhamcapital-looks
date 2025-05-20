import { Box, Tab, Tabs } from "@mui/material";
import theme from "../../../theme";
import { useState } from "react";
import { HomeLoanCalculator } from "../HomeLoanCalculator";

export const Calculators = () => {
  const [tabNumber, setTabNumber] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("value", newValue);
    setTabNumber(newValue);
  };
  const boxStyle = {
    marginTop: 5,
    marginBottom: 5,
    background: theme.palette.secondary.contrastText,
    padding: 0,
  };

  const tabStyles = {
    fontWeight: 500,
  };
  return (
    <>
      <Box sx={boxStyle} className="cardShadow">
        <Tabs
          value={tabNumber}
          onChange={handleChange}
          variant="standard"
          sx={tabStyles}
        >
          <Tab label="EMI Calculator" sx={tabStyles} />
        </Tabs>
        {tabNumber === 0 && <HomeLoanCalculator />}
      </Box>
    </>
  );
};
