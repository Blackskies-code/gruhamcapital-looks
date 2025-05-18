import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import theme from "../../../theme";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import getScheduleForConsultation from "../../Services/ConsultationService";

interface IConsultationSchedule {
  time: string;
  availableSlots: string;
  bookedSlots?: string;
}

export const OnlineConsulationForm = () => {
  const purposeOfLoansList = ["Mortgage", "Housing"];

  const [purposeOfLoan, setPurposeOfLoan] = useState(0);
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [consultationSchedule, setConsultationSchedule] = useState<
    IConsultationSchedule[]
  >([]);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handlePurposeOfLoanDropDown = (event: any) => {
    setPurposeOfLoan(event.target.value);
  };
  const mobileNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMobileNumber(value ? value : "");
  };

  const dateHandler = async (event: any) => {
    console.log("event date", dayjs(event).format("MM/DD/YYYY"));
    const selectedDate = dayjs(event).format("MM/DD/YYYY");
    setDate(selectedDate);
    setLoading(true);
    const data = await getScheduleForConsultation();
    setLoading(false);
    setConsultationSchedule([...data]);
  };

  const timeHandler = (event: any) => {
    console.log("event time", event);
    setSelectedTime(event.target.value);
  };

  const boxStyle = {
    background: theme.palette.secondary.contrastText,
    marginBottom: 5,
    padding: 0,
  };

  const formStyle = {
    padding: 6,
    marginTop: 3,
  };

  const formTextStyle = {
    marginRight: 2,
    paddingTop: "auto",
    paddingBottom: "auto",
    verticalAlign: "middle",
  };

  const formLabelStyle = {
    marginBottom: 2,
    marginLeft: "auto",
    marginRight: "auto",
  };

  const submitButton = {
    color: theme.palette.secondary.contrastText,
    borderRadius: 15,
    marginTop: 2,
    textTransform: "none",
    backgroundColor: theme.palette.secondary.main,
  };

  const buttonPlacement = {
    marginLeft: "auto",
  };

  const logoStyle = {
    margin: "auto",
  };
  const headerStyle = {
    fontSize: 35,
    fontFamily: "Montserrat-Bold",
  };
  return (
    <Container sx={boxStyle} className="cardShadow">
      <Grid container>
        <Grid size={{ md: 4 }}>
          {/* <img
            src={consultationImage}
            height="290"
            width="280"
            style={logoStyle}
          /> */}
        </Grid>
        <Grid sx={formStyle} size={{ md: 8 }}>
          <Typography
            sx={headerStyle}
            mb={2}
            color={theme.palette.primary.contrastText}
          >
            Online Consultation
          </Typography>
          <Grid container sx={formLabelStyle}>
            <Grid size={{ md: 3 }}>
              <Typography align="left" sx={formTextStyle}>
                Name :
              </Typography>
            </Grid>
            <Grid size={{ md: 7 }}>
              <TextField
                required
                placeholder="Name"
                variant="standard"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container sx={formLabelStyle}>
            <Grid size={{ md: 3 }}>
              <Typography align="left" sx={formTextStyle}>
                Mobile :
              </Typography>
            </Grid>
            <Grid size={{ md: 7 }}>
              <TextField
                required
                placeholder="Phone"
                variant="standard"
                onChange={mobileNumberHandler}
                slotProps={{ input: { type: "number" } }}
                value={mobileNumber}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container sx={formLabelStyle}>
            <Grid size={{ md: 3 }}>
              <Typography align="left" sx={formTextStyle}>
                Email :
              </Typography>
            </Grid>
            <Grid size={{ md: 7 }}>
              <TextField
                required
                variant="standard"
                placeholder="Email"
                slotProps={{ input: { type: "email" } }}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container sx={formLabelStyle}>
            <Grid size={{ md: 3 }}>
              <Typography align="left" sx={formTextStyle}>
                Purpose Of Loan :
              </Typography>
            </Grid>
            <Grid size={{ md: 7 }}>
              <Select
                value={purposeOfLoan}
                label="Purpose Of Loan"
                onChange={handlePurposeOfLoanDropDown}
                variant="standard"
                fullWidth
              >
                {purposeOfLoansList.map((element, ind) => {
                  return (
                    <MenuItem
                      value={ind}
                      key={"purposeDropDown" + ind.toString()}
                    >
                      {element}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
          </Grid>
          <Grid container sx={formLabelStyle}>
            <Grid size={{ md: 3 }}>
              <Typography>Date: </Typography>
            </Grid>
            <Grid size={{ md: 7 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={dateHandler} />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size={{ md: 3 }}>
              <Typography>Slots: </Typography>
            </Grid>
            <Grid size={{ md: 7 }}>
              <FormControl>
                <InputLabel id="demo-simple-select-label">
                  {consultationSchedule.length
                    ? "Pick a slot"
                    : "Select the date"}
                </InputLabel>
                <Select
                  value={selectedTime}
                  label="Time"
                  onChange={timeHandler}
                  style={{ width: 160 }}
                  disabled={!consultationSchedule.length}
                >
                  {consultationSchedule?.map((schedule, ind) => {
                    return (
                      <MenuItem
                        value={schedule.time}
                        key={"date" + schedule.time}
                      >
                        {schedule.time}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              {loading && (
                <CircularProgress
                  size={30}
                  sx={{
                    marginLeft: "10px",
                  }}
                />
              )}
            </Grid>
          </Grid>
          <Grid container size={10}>
            <Grid sx={buttonPlacement}>
              <Button variant="contained" sx={submitButton}>
                Request Consultation
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
