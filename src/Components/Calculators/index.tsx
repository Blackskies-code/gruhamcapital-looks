import { Box, Tab, Tabs } from "@mui/material";
import theme from "../../theme";
import { useState } from "react";
// import { HomeLoanCalculator } from "../HomeLoanCalculator";
import { HomeLoanCalculatorMobile } from "../Mobile/HomeLoanCalculator/index";
import { HomeLoanCalculatorWeb } from "../Web/HomeLoanCalculator/index";
import LoanEligibilityCalculatorWeb from "../Web/LoanEligibilityCalculator";
import LoanEligibilityCalculatorMobile from "../Mobile/LoanEligibilityCalculator";

export const Calculators = () => {
  const [tabNumber, setTabNumber] = useState(0);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
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
          variant="scrollable"
          sx={tabStyles}
        >
          <Tab label="Home Loan Calculator" sx={tabStyles} />
          <Tab label="Loan Eligibility Calculator" sx={tabStyles} />
        </Tabs>
        {tabNumber === 0 && (
          <div>
            <HomeLoanCalculatorMobile />
            <HomeLoanCalculatorWeb />
          </div>
        )}
        {tabNumber === 1 && (
          <div>
            <LoanEligibilityCalculatorMobile />
            <LoanEligibilityCalculatorWeb />
          </div>
        )}
      </Box>
    </>
  );
};
