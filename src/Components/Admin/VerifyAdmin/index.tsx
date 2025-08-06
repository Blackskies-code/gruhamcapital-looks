import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import theme from "../../../theme";
import React, { useEffect, useState } from "react";
import {
  doAdminVerificationApi,
  hashPassword,
} from "../../../Services/AuthService";
import { useNavigate } from "react-router";

export const VerifyAdmin = () => {
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
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
    setPassword(event.target.value);
    // clearing error
    if (isError) {
      setIsError(false);
    }
  };

  const authenticateAdmin = async () => {
    const encodedPassword = await hashPassword(password);
    const res = await doAdminVerificationApi({ admin_token: encodedPassword });
    if (!res.data.status) {
      setIsError(true);
    }
    if (res.data.status) {
      sessionStorage.setItem("admin", "true");
      navigate("/admin");
    }
  };

  const errorTextStyle = {
    fontSize: "12px",
    color: "red",
    marginLeft: 2,
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
              slotProps={{ input: { type: "password" } }}
              onChange={handlePassword}
              fullWidth
              error={isError}
            />
            {isError && (
              <Typography sx={errorTextStyle}>**Wrong Password</Typography>
            )}
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
