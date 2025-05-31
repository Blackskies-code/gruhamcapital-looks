import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Grid, Slider, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import theme from "../../../theme";
import { PieChart } from "@mui/x-charts/PieChart";

const LoanEligibilityCalculatorMobile = () => {
  const [monthlyNetIncome, setMonthlyNetIncome] = useState(20000);
  const [eligibleLoan, setEligibleLoan] = useState(0);
  const [eligibleEmi, setEligibleEmi] = useState(0);
  const [calculatedInterest, setCalculatedInterest] = useState(0);
  const [existingEmi, setExistingEmi] = useState(0);
  const [tenure, setTenure] = useState(1);
  const [interest, setInterest] = useState(10);
  const [isEligibleForLoan, setIsEligibleForLoan] = useState<boolean | null>(
    null
  );

  const handleMonthlyNetIncome = (event: any) => {
    setMonthlyNetIncome(event.target.value);
  };

  const handleTenure = (event: any) => {
    setTenure(event.target.value);
  };

  const handleInterest = (event: any) => {
    setInterest(event.target.value);
  };

  useEffect(() => {
    calculateLoanEligibility();
  }, [interest, tenure, monthlyNetIncome, existingEmi]);

  const handleExistingEmi = (event: any) => {
    setExistingEmi(event.target.value);
  };

  const roundToTwo = (num: number) => {
    return Math.round(num * 100) / 100;
  };

  const calculateLoanEligibility = () => {
    let maxEligibleEmi = monthlyNetIncome * 0.65;
    maxEligibleEmi = monthlyNetIncome - existingEmi;
    // Considering eligibility for loan is 65%
    if (existingEmi > maxEligibleEmi) {
      // if the existing is greater than 65% defaulting the Emi & Loan to 0
      setEligibleEmi(0);
      setEligibleLoan(0);
      setIsEligibleForLoan(false);
      setCalculatedInterest(0);
      console.log("values when greater than 65%");
    } else {
      // Convert annual interest rate to monthly
      const monthlyRoi = interest / 12 / 100;
      // Convert Tenure in Months
      const tenureInMonths = tenure * 12;
      // Calculate Loan Amount
      const loanAmount =
        (maxEligibleEmi * (1 - Math.pow(1 + monthlyRoi, -tenureInMonths))) /
        monthlyRoi;
      // Calculate total Amount Repaid
      const totalRepayment = maxEligibleEmi * tenureInMonths;
      // Calculate total Interest Paid
      const totalInterest = totalRepayment - loanAmount;
      setEligibleLoan(roundToTwo(loanAmount));
      setEligibleEmi(maxEligibleEmi);
      setCalculatedInterest(roundToTwo(totalInterest));
      setIsEligibleForLoan(true);
    }
  };

  const PrettoSlider = {
    height: 6,
    marginLeft: 2,
    marginRight: 2,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 20,
      width: 20,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&::before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      padding: 1,
      width: "250%",
      height: 16,
      borderRadius: "40%",
    },
  };

  const boxStyleMobile = {
    background: theme.palette.secondary.contrastText,
    marginBottom: 1,
    padding: 2,
  };

  const pieChartStyle = {
    padding: 3,
  };
  const calculatedBlockStyleMobile = {
    padding: 3,
    marginLeft: 2,
    marginRight: 2,
    background: theme.palette.primary.contrastText,
    color: theme.palette.secondary.contrastText,
    borderRadius: 3,
    marginBottom: 3,
  };

  const calculatedHeadingStyle = {
    fontFamily: "Montserrat-Bold",
    color: theme.palette.secondary.contrastText,
  };

  const rupeeSymbolStyle = {
    fontSize: 15,
    margin: 0,
    padding: 0,
  };

  const rupeeResultSymbolStyle = {
    fontSize: 16,
    marginTop: "auto",
    marginBottom: "auto",
  };

  const inputBlockStyle = {
    marginBottom: 5,
  };

  const headerStyleMobile = {
    fontFamily: "Montserrat-Bold",
    fontSize: 26,
    marginBottom: 3,
  };
  const containerGrid = {
    padding: 0,
  };

  const eligibilityBlockStyle = {
    padding: 2,
    marginLeft: 2,
    marginRight: 4,
    background: isEligibleForLoan ? "#4caf50" : "#b02b3b",
    color: theme.palette.secondary.contrastText,
    borderRadius: 3,
    marginBottom: 1,
  };

  const eligibilityHeadingStyle = {
    fontFamily: "Montserrat-Bold",
    color: theme.palette.secondary.contrastText,
    textAlign: "center",
  };

  const sliderHeadingMobile = {
    fontSize: "16px",
  };

  return (
    <Grid container>
      <Grid
        size={{ xs: 12 }}
        sx={{ display: { xs: "block", md: "none" }, ...boxStyleMobile }}
      >
        <Typography
          sx={headerStyleMobile}
          color={theme.palette.primary.contrastText}
        >
          Loan Eligibility Calculator
        </Typography>
        <Grid sx={{ marginBottom: 2 }}>
          <Grid container>
            <Grid size={{ xs: 8 }}>
              <Typography mr={1} align="left" sx={sliderHeadingMobile}>
                Monthly Net Income :
              </Typography>
            </Grid>
            <Grid size={{ xs: 4 }} sx={{ marginLeft: "auto", marginRight: 0 }}>
              <Stack direction="row">
                <CurrencyRupeeIcon />
                <TextField
                  required
                  variant="standard"
                  onChange={handleMonthlyNetIncome}
                  inputProps={{
                    type: "number",
                  }}
                  value={monthlyNetIncome}
                  sx={{ width: "80%" }}
                />
              </Stack>
            </Grid>
          </Grid>

          <Stack direction="row" sx={{ alignItems: "center", mb: 1, mt: 1 }}>
            <CurrencyRupeeIcon sx={rupeeSymbolStyle} />
            <Slider
              value={monthlyNetIncome}
              valueLabelDisplay="auto"
              onChange={handleMonthlyNetIncome}
              sx={PrettoSlider}
              min={10000}
              max={1000000}
            />
            <CurrencyRupeeIcon sx={rupeeSymbolStyle} />
            <CurrencyRupeeIcon sx={rupeeSymbolStyle} />
            <CurrencyRupeeIcon sx={rupeeSymbolStyle} />
          </Stack>
        </Grid>

        <Grid sx={inputBlockStyle}>
          <Grid container>
            <Grid size={{ xs: 6 }}>
              <Typography mr={1} align="left" sx={sliderHeadingMobile}>
                Tenure :
              </Typography>
            </Grid>
            <Grid size={{ xs: 6 }} sx={{ marginLeft: 0, marginRight: "auto" }}>
              <Stack direction="row">
                <Typography sx={{ mr: 2 }}>Years </Typography>
                <TextField
                  required
                  variant="standard"
                  onChange={handleTenure}
                  inputProps={{
                    type: "number",
                  }}
                  value={tenure}
                  sx={{ width: "100%" }}
                />
              </Stack>
            </Grid>
          </Grid>
          <Stack direction="row" sx={{ alignItems: "center", mb: 1, mt: 1 }}>
            <Slider
              value={tenure}
              valueLabelDisplay="auto"
              onChange={handleTenure}
              sx={PrettoSlider}
              min={1}
              max={25}
            />
          </Stack>
        </Grid>

        <Grid sx={inputBlockStyle}>
          <Grid container>
            <Grid size={{ xs: 6 }}>
              <Typography mr={1} align="left" sx={sliderHeadingMobile}>
                Existing Monthly EMIs :
              </Typography>
            </Grid>
            <Grid size={{ xs: 6 }} sx={{ marginLeft: "auto", marginRight: 0 }}>
              <Stack direction="row">
                <CurrencyRupeeIcon />
                <TextField
                  required
                  variant="standard"
                  onChange={handleExistingEmi}
                  inputProps={{
                    type: "number",
                  }}
                  value={existingEmi}
                  sx={{ width: "100%" }}
                />
              </Stack>
            </Grid>
          </Grid>

          <Stack direction="row" sx={{ alignItems: "center", mb: 1, mt: 1 }}>
            <CurrencyRupeeIcon sx={rupeeSymbolStyle} />
            <Slider
              value={existingEmi}
              valueLabelDisplay="auto"
              onChange={handleExistingEmi}
              sx={PrettoSlider}
              min={0}
              max={100000}
              step={10}
            />
            <CurrencyRupeeIcon sx={rupeeSymbolStyle} />
            <CurrencyRupeeIcon sx={rupeeSymbolStyle} />
            <CurrencyRupeeIcon sx={rupeeSymbolStyle} />
          </Stack>
        </Grid>

        <Grid sx={inputBlockStyle}>
          <Grid container>
            <Grid size={{ xs: 6 }} sx={sliderHeadingMobile}>
              <Typography mr={2} align="left">
                Interest :
              </Typography>
            </Grid>
            <Grid size={{ xs: 6 }} sx={{ marginLeft: "auto", marginRight: 0 }}>
              <Stack direction="row">
                <Typography sx={{ mr: 2, ...sliderHeadingMobile }}>
                  %{" "}
                </Typography>
                <TextField
                  required
                  variant="standard"
                  onChange={handleInterest}
                  inputProps={{
                    type: "number",
                  }}
                  value={interest}
                  sx={{ width: "100%" }}
                />
              </Stack>
            </Grid>
          </Grid>
          <Stack direction="row" sx={{ alignItems: "center", mb: 1, mt: 1 }}>
            <Slider
              value={interest}
              valueLabelDisplay="auto"
              onChange={handleInterest}
              sx={PrettoSlider}
              min={1}
              max={30}
              step={0.01}
            />
          </Stack>
        </Grid>
        <Grid sx={eligibilityBlockStyle}>
          {/* Display Pie Chart only if the user is eligible for Loan */}
          <Grid>
            <Typography variant="h5" sx={eligibilityHeadingStyle}>
              {isEligibleForLoan ? "Eligible" : "Not Eligible"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        display={isEligibleForLoan ? "block" : "none"}
        size={{ xs: 12 }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Grid container>
          <PieChart
            colors={[theme.palette.primary.main, theme.palette.secondary.main]}
            sx={pieChartStyle}
            series={[
              {
                data: [
                  { id: 0, value: eligibleLoan, label: "Loan Amount" },
                  {
                    id: 1,
                    value: calculatedInterest,
                    label: "Interest on Loan",
                  },
                ],
                innerRadius: 8,
                outerRadius: 100,
                paddingAngle: 4,
                cornerRadius: 8,
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 10,
                  additionalRadius: -5,
                  color: "lightgreen",
                },
              },
            ]}
            height={200}
            margin={{ left: 50, right: 50 }}
            slotProps={{
              legend: {
                direction: "horizontal",
                // itemGap: 40,
                position: {
                  horizontal: "center",
                  vertical: "bottom",
                },
                // markGap: 10,
                // padding: 2,
              },
            }}
          />
        </Grid>
        <Grid sx={calculatedBlockStyleMobile}>
          <Grid mb={2}>
            <Typography variant="h5" sx={calculatedHeadingStyle}>
              Calculated Loan
            </Typography>
          </Grid>
          <Grid container>
            <Grid>
              <Typography>Eligible EMI : </Typography>
            </Grid>
            <Grid>
              <Stack direction="row">
                <CurrencyRupeeIcon sx={rupeeResultSymbolStyle} />
                <Typography>{eligibleEmi}</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid>
              <Typography>Principle Loan Amount : </Typography>
            </Grid>
            <Grid>
              <Stack direction="row">
                <CurrencyRupeeIcon sx={rupeeResultSymbolStyle} />
                <Typography> {eligibleLoan}</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid>
              <Typography>Interest : </Typography>
            </Grid>
            <Grid>
              <Stack direction="row">
                <CurrencyRupeeIcon sx={rupeeResultSymbolStyle} />
                <Typography>{calculatedInterest}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoanEligibilityCalculatorMobile;
