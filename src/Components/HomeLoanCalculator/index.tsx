import { Grid, Slider, Stack, TextField, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import theme from "../../../theme";
import { useEffect, useState } from "react";
import { PieChart } from "@mui/icons-material";

export const HomeLoanCalculator = () => {
  const [tenure, setTenure] = useState<number>(1);
  const [principalAmount, setPrincipalAmount] = useState(20000);
  const [interest, setInterest] = useState(5);
  const [loanEmi, setLoanEmi] = useState<number>();

  useEffect(() => {
    console.log("use effect ran");
    calculateEmi();
  }, [tenure, principalAmount, interest]);

  const calculateEmi = () => {
    let principal = principalAmount;
    let roi = interest / 12 / 100; // 8.5%/12 - per month interest
    let numberOfMonths = tenure * 12;
    let emi = (principal * roi) / (1 - Math.pow(1 + interest, -numberOfMonths));
    console.log("emi value", emi);
    setLoanEmi(emi);
  };

  const handleTenure = (event: any) => {
    console.log("tenure", event.target.value);
    setTenure(event.target.value);
  };

  const handlePrincipalAmount = (event: any) => {
    setPrincipalAmount(event.target.value);
  };

  const handleInterest = (event: any) => {
    setInterest(event.target.value);
  };

  const boxStyle = {
    background: theme.palette.secondary.contrastText,
    marginBottom: 5,
    padding: 0,
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

  const submitButton = {
    color: theme.palette.secondary.contrastText,
    borderRadius: 15,
    textTransform: "none",
  };

  const buttonPlacement = {
    marginLeft: "auto",
  };

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
          EMI Calculator
        </Typography>
        <Grid size={{ md: 7 }} sx={inputBlockStyle}>
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
              max={1000000}
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

        {/* <Grid sx={inputBlockStyle}>
          <Grid container>
            <Grid>
              <Typography mr={2} align="right">
                Existing Monthly EMIs :
              </Typography>
            </Grid>
            <Grid sx={{ marginLeft: "auto", marginRight: 0 }}>
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
        </Grid> */}

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
                    value: interest,
                    label: "Interest on Loan",
                  },
                ],
                innerRadius: 8,
                outerRadius: 150,
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
            height={450}
            margin={{ left: 50, right: 50 }}
            slotProps={{
              legend: {
                direction: "row",
                itemGap: 40,
                position: {
                  horizontal: "middle",
                  vertical: "bottom",
                },
                markGap: 10,
                padding: 2,
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
              <Typography>Total Interest : </Typography>
            </Grid>
            <Grid size={{ md: 3 }}>
              <Stack direction="row">
                <CurrencyRupeeIcon sx={rupeeResultSymbolStyle} />
                <Typography>{interest}</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size={{ md: 7 }}>
              <Typography>Principle Loan Amount : </Typography>
            </Grid>
            <Grid size={{ md: 3 }}>
              <Stack direction="row">
                <CurrencyRupeeIcon sx={rupeeResultSymbolStyle} />
                <Typography> {principalAmount}</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size={{ md: 7 }}>
              <Typography>EMI Value : </Typography>
            </Grid>
            <Grid size={{ md: 3 }}>
              <Stack direction="row">
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
