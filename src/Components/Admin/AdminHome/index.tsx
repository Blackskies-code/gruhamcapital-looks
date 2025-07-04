import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import theme from "../../../theme";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const AdminHome = () => {
  const listOfSlots = [
    {
      name: "abc",
      description: "test",
      startTime: "10:30am",
      endTime: "12:30pm",
      availability: "15",
    },
    {
      name: "def",
      description: "test two",
      startTime: "1:30pm",
      endTime: "2:30pm",
      availability: "15",
    },
    {
      name: "ghi",
      description: "test three",
      startTime: "3:30am",
      endTime: "4:30pm",
      availability: "15",
    },
  ];
  const formStyle = {
    padding: 6,
    marginTop: 10,
    marginBottom: 4,
  };

  const boxStyle = {
    background: theme.palette.secondary.contrastText,
    padding: 0,
  };

  const headerStyle = {
    fontSize: 30,
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
  };

  const inputGridStyle = {
    margin: 2,
    padding: 2,
    justifyContent: "center",
  };

  const cardHeaderStyle = {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    textAlign: "left",
    marginBottom: 2,
  };

  const inputStyle = {
    marginBottom: 3,
  };

  const formLabelStyle = {
    alignContent: "end",
    justifyItems: "center",
  };

  const submitButton = {
    color: theme.palette.secondary.contrastText,
    borderRadius: 15,
    margin: "2px",
    textTransform: "none",
    backgroundColor: theme.palette.secondary.main,
  };

  return (
    <Container sx={{ marginBottom: 4 }} maxWidth="md">
      <Grid sx={[formStyle, boxStyle]}>
        <Typography sx={headerStyle}>Admin Page</Typography>
      </Grid>
      {/* Create Slot */}
      <Grid className="cardShadow">
        <Grid sx={inputGridStyle}>
          <Grid>
            <Typography sx={cardHeaderStyle}>Create Slot</Typography>
          </Grid>
          {/* name */}
          <Grid sx={inputStyle} container>
            <Grid sx={formLabelStyle} size={{ md: 2 }}>
              <Typography style={{ alignSelf: "center" }}>Name:</Typography>
            </Grid>
            <Grid size={{ md: 6 }}>
              <TextField
                placeholder="enter name"
                variant="standard"
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
          {/* Desc i/p */}
          <Grid container sx={inputStyle}>
            <Grid sx={formLabelStyle} size={{ md: 2 }}>
              <Typography>Description:</Typography>
            </Grid>
            <Grid size={{ md: 6 }}>
              <TextField
                placeholder="enter desc"
                variant="standard"
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
          {/* starttime */}
          <Grid container sx={inputStyle}>
            <Grid
              sx={{ ...formLabelStyle, alignContent: "center" }}
              size={{ md: 2 }}
            >
              <Typography>Start Time:</Typography>
            </Grid>
            <Grid size={{ md: 6 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker label="start time" />
              </LocalizationProvider>
            </Grid>
          </Grid>
          {/* end time */}
          <Grid container sx={inputStyle}>
            <Grid
              sx={{ ...formLabelStyle, alignContent: "center" }}
              size={{ md: 2 }}
            >
              <Typography>End Time:</Typography>
            </Grid>
            <Grid size={{ md: 6 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker label="end time" />
              </LocalizationProvider>
            </Grid>
          </Grid>
          {/* Availability per slot */}
          <Grid container sx={inputStyle}>
            <Grid sx={formLabelStyle} size={{ md: 2 }}>
              <Typography>Availability per Slot:</Typography>
            </Grid>
            <Grid size={{ md: 6 }}>
              <TextField
                placeholder="slot availability count"
                variant="standard"
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
          {/* Submit Button */}
          <Grid style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              sx={{ ...submitButton, position: "relative", zIndex: 1 }}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* List/Delete Slot */}
      <Grid style={{ marginTop: "40px" }} className="cardShadow">
        <Grid
          sx={{
            ...inputGridStyle,
            padding: 2,
            marginBottom: 0,
            paddingBottom: 0,
          }}
        >
          <Typography sx={cardHeaderStyle}>List/Delete Slot</Typography>
        </Grid>
        <Grid container>
          {listOfSlots.map((slot) => {
            return (
              <Grid sx={inputGridStyle} className="cardShadow">
                <Typography>Name : {slot.name}</Typography>
                <Typography>Description : {slot.description}</Typography>
                <Typography>Start Time: {slot.startTime}</Typography>
                <Typography>End Time: {slot.endTime}</Typography>
                <Typography>Availability: {slot.availability}</Typography>
                <Grid style={{ textAlign: "right" }}>
                  <Button variant="contained" sx={{ ...submitButton }}>
                    Delete
                  </Button>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};
