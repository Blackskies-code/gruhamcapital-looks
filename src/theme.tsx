import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    // fontFamily: 'BiomeW01-SemiBold'
    fontFamily: "Montserrat-Medium",
  },
  palette: {
    background: {
      default: "#1D1D1D",
    },
    primary: {
      main: "#520075",
      // main: "#1CAC78",
      dark: "#1D1D1D",
      light: "#40E0A7",
      contrastText: "#B59410",
    },
    secondary: {
      main: "#B59410",
      dark: "#190f00",
      light: "#3B3B3B",
      contrastText: "#FCFCFB",
    },
  },
});

export default theme;
