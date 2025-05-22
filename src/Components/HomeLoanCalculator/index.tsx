import { Grid, Slider, Stack, TextField, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import theme from "../../theme";
import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export const HomeLoanCalculator = () => {
  const [tenure, setTenure] = useState<number>(1);
  const [principalAmount, setPrincipalAmount] = useState(20000);
  const [roi, setRoi] = useState(5);
  const [loanEmi, setLoanEmi] = useState<number | string>();
  const [totalInterest, setTotalInterest] = useState<number>(0);

  useEffect(() => {
    calculateEmi();
  }, [principalAmount, roi, tenure]);

  const roundToTwo = (num: number) => {
    return Math.round(num * 100) / 100;
  };

  const calculateEmi = () => {
    let principal: any = principalAmount;
    let monthlyRoi: any = roi / 12 / 100; // 8.5%/12 - per month interest
    let tenureInMonths: any = tenure * 12;

    const emi =
      (principal * monthlyRoi * Math.pow(1 + monthlyRoi, tenureInMonths)) /
      (Math.pow(1 + monthlyRoi, tenureInMonths) - 1);
    setLoanEmi(roundToTwo(emi));
    setTotalInterest(roundToTwo((emi * tenureInMonths) - principalAmount));
  };

  const handleTenure = (event: any) => {
    setTenure(event.target.value);
  };

  const handlePrincipalAmount = (event: any) => {
    setPrincipalAmount(event.target.value);
  };

  const handleInterest = (event: any) => {
    setRoi(event.target.value);
  };

  const boxStyle = {
    background: theme.palette.secondary.contrastText,
    marginBottom: 5,
    padding: 5,
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

  const pieChartStyle = {
    padding: 3,
  };

  const calculatedBlockStyle = {
    padding: 3,
    marginLeft: 2,
    marginRight: 4,
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

  // const submitButton = {
  //   color: theme.palette.secondary.contrastText,
  //   borderRadius: 15,
  //   textTransform: "none",
  // };

  // const buttonPlacement = {
  //   marginLeft: "auto",
  // };

  const headerStyle = {
    fontFamily: "Montserrat-Bold",
    fontSize: 35,
    marginBottom: 5,
  };
  const containerGrid = {
    padding: 0,
  };

  return (
    <Grid container sx={containerGrid}>
      <Grid size={{ md: 7 }} sx={boxStyle}>
        <Typography sx={headerStyle} color={theme.palette.primary.contrastText}>
          Home Loan Calculator
        </Typography>
        <Grid sx={inputBlockStyle}>
          <Grid container>
            <Grid>
              <Typography mr={2} align="right">
                Principal Amount :
              </Typography>
            </Grid>
            <Grid sx={{ marginLeft: "auto", marginRight: 0 }}>
              <Stack direction="row">
                <CurrencyRupeeIcon />
                <TextField
                  required
                  variant="standard"
                  onChange={handlePrincipalAmount}
                  inputProps={{
                    type: "number",
                  }}
                  value={principalAmount}
                  sx={{ width: "100%" }}
                />
              </Stack>
            </Grid>
          </Grid>

          <Stack direction="row" sx={{ alignItems: "center", mb: 1, mt: 1 }}>
            <CurrencyRupeeIcon sx={rupeeSymbolStyle} />
            <Slider
              value={principalAmount}
              valueLabelDisplay="auto"
              onChange={handlePrincipalAmount}
              sx={PrettoSlider}
              min={10000}
              max={100000000}
            />
            <CurrencyRupeeIcon sx={rupeeSymbolStyle} />
            <CurrencyRupeeIcon sx={rupeeSymbolStyle} />
            <CurrencyRupeeIcon sx={rupeeSymbolStyle} />
          </Stack>
        </Grid>

        <Grid sx={inputBlockStyle}>
          <Grid container>
            <Grid>
              <Typography mr={2} align="right">
                Tenure :
              </Typography>
            </Grid>
            <Grid sx={{ marginLeft: "auto", marginRight: 0 }}>
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
            <Grid>
              <Typography mr={2} align="right">
                Interest :
              </Typography>
            </Grid>
            <Grid sx={{ marginLeft: "auto", marginRight: 0 }}>
              <Stack direction="row">
                <Typography sx={{ mr: 2 }}>Percentage </Typography>
                <TextField
                  required
                  variant="standard"
                  onChange={handleInterest}
                  inputProps={{
                    type: "number",
                  }}
                  value={roi}
                  sx={{ width: "100%" }}
                />
              </Stack>
            </Grid>
          </Grid>
          <Stack direction="row" sx={{ alignItems: "center", mb: 1, mt: 1 }}>
            <Slider
              value={roi}
              valueLabelDisplay="auto"
              onChange={handleInterest}
              sx={PrettoSlider}
              min={1}
              max={30}
              step={0.01}
            />
          </Stack>
        </Grid>
      </Grid>
      <Grid size={{ md: 5 }}>
        <Grid container>
          <PieChart
            colors={[theme.palette.primary.main, theme.palette.secondary.main]}
            sx={pieChartStyle}
            series={[
              {
                data: [
                  { id: 0, value: principalAmount, label: "Loan Amount" },
                  {
                    id: 1,
                    value: totalInterest,
                    label: "Interest on Loan",
                  },
                ],
                innerRadius: 8,
                outerRadius: 140,
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
            height={400}
            margin={{ left: 50, right: 50 }}
            slotProps={{
              legend: {
                direction: "horizontal",
                position: {
                  horizontal: "center",
                  vertical: "bottom",
                },
              },
            }}
          />
        </Grid>
        <Grid sx={calculatedBlockStyle}>
          <Grid mb={2}>
            <Typography variant="h5" sx={calculatedHeadingStyle}>
              Calculated Loan
            </Typography>
          </Grid>
          <Grid container>
            <Grid size={{ md: 7 }}>
              <Typography>Total Amount</Typography>
              <Typography variant="caption">(Loan + Interest)</Typography>
            </Grid>
            <Grid size={{ md: 3 }}>
              <Stack direction="row">
                <Typography>:</Typography>
                <CurrencyRupeeIcon sx={rupeeResultSymbolStyle} />
                <Typography>{totalInterest + principalAmount}</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size={{ md: 7 }}>
              <Typography>Interest</Typography>
            </Grid>
            <Grid size={{ md: 3 }}>
              <Stack direction="row">
                <Typography>:</Typography>
                <CurrencyRupeeIcon sx={rupeeResultSymbolStyle} />
                <Typography>{totalInterest}</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size={{ md: 7 }}>
              <Typography>Principal Loan Amount</Typography>
            </Grid>
            <Grid size={{ md: 3 }}>
              <Stack direction="row">
                <Typography>:</Typography>
                <CurrencyRupeeIcon sx={rupeeResultSymbolStyle} />
                <Typography> {principalAmount}</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size={{ md: 7 }}>
              <Typography>EMI Value</Typography>
            </Grid>
            <Grid size={{ md: 3 }}>
              <Stack direction="row">
                <Typography>:</Typography>
                <CurrencyRupeeIcon sx={rupeeResultSymbolStyle} />
                <Typography>{loanEmi}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
