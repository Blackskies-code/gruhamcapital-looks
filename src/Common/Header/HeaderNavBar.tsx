import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import LogoImage from "../../assets/icon.png"
import theme from "../../../theme";

export default function HeaderNavBar() {
  const headerNameStyle = {
    mr: 2,
    ml: 1,
    fontFamily: "BiomeW01-SemiBold",
    color: "#FCFCFB",
    fontSize: 35,
    textDecoration: "none",
    // display: { xs: "none", md: "flex" },
  };

  const AppBarStyle = {
    background: theme.palette.primary.main,
    width: "100%",
    // padding: "0.6rem",
    borderBottom: "solid 5px",
    borderColor: "#fcbc28",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={AppBarStyle}>
        <Toolbar>
          <img src={LogoImage} height="40" width="40"/>
          <Typography variant="h6" component="div" sx={headerNameStyle}>
            Gruham Capital
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
