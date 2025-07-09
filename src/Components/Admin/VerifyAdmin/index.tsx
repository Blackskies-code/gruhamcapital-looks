import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import theme from "../../../theme";
import React, { useEffect, useState } from "react";
import { doAdminVerificationApi } from "../../../Services/AuthService";
import { useNavigate } from "react-router";

export const VerifyAdmin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("admin")) {
      navigate("/admin");
    }
  });

  const boxStyle = {
    background: theme.palette.secondary.contrastText,
    padding: 0,
    // position: "absolute",
    alignItems: "center",
    // left: "50%",
  };

  const headerStyle = {
    fontSize: 30,
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
  };

  const formStyle = {
    padding: 6,
  };

  const inputGridStyle = {
    margin: 2,
    padding: 2,
    justifyContent: "center",
  };

  const submitButton = {
    color: theme.palette.secondary.contrastText,
    borderRadius: 15,
    marginLeft: 2,
    textTransform: "none",
    backgroundColor: theme.palette.secondary.main,
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("val", event.target.value);
    setPassword(event.target.value);
  };

  const authenticateAdmin = async () => {
    const res = await doAdminVerificationApi({ password });
    console.log("res", res);
    sessionStorage.setItem("admin", "true");
    navigate("/admin");
  };

  return (
    <Container
      style={{ minHeight: "94vh", alignContent: "center" }}
      maxWidth="md"
    >
      <Grid size={{ md: 4 }} sx={[boxStyle, formStyle]} className="cardShadow">
        <Grid size={{ md: 12 }}>
          <Typography sx={headerStyle}> Verify Admin </Typography>
        </Grid>
        <Grid container sx={inputGridStyle}>
          <Grid size={{ md: 8 }}>
            <TextField
              required
              placeholder="password"
              variant="standard"
              value={password}
              onChange={handlePassword}
              fullWidth
            />
          </Grid>
          <Grid size={{ md: 2 }}>
            <Button
              className="highlight-button"
              variant="contained"
              sx={{ ...submitButton }}
              onClick={authenticateAdmin}
            >
              Login
            </Button>
          </Grid>
        </Grid>
        <Typography style={{ textAlign: "center", color: "red" }}>
          {" "}
          **Provide the admin password!{" "}
        </Typography>
      </Grid>
    </Container>
  );
};
