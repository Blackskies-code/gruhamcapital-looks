import theme from "../theme";
import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import FooterBar from "../Common/FooterBar";
import HeaderNavBar from "../Common/Header/HeaderNavBar";
import type { ReactNode } from "react";
import { Outlet } from "react-router";

interface LayoutProps {
  children?: ReactNode;
}

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
