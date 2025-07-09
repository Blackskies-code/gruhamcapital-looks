import theme from "../theme";
import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import FooterBar from "../Common/FooterBar";
import HeaderNavBar from "../Common/Header/HeaderNavBar";
import { Outlet } from "react-router";
import type { LayoutProps } from "../Types";

function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <HeaderNavBar />
      <Container>{children ? children : <Outlet />}</Container>
      <FooterBar />
    </ThemeProvider>
  );
}

export default Layout;
