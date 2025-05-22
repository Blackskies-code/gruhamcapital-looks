import { ThemeProvider } from "@emotion/react";
import FooterBar from "./Common/FooterBar";
import HeaderNavBar from "./Common/Header/HeaderNavBar";
import theme from "./theme";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router";
import { Home } from "./Pages/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderNavBar />
        <Container>
          <Routes>
            <Route path="/home" Component={Home} />
          </Routes>
        </Container>
        <FooterBar />
      </ThemeProvider>
    </>
  );
}

export default App;
