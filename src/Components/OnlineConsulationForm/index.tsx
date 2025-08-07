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
import { useContext, useState } from "react";
import theme from "../../theme";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  createConsultationApi,
  getScheduleForConsultationApi,
} from "../../Services/ConsultationService";
import "./style.css";
import { SnackBarContext } from "../../Context";

interface slotObj {
  id?: number | string;
  slotName?: string | null;
  description?: string | null;
  startTime?: number | null;
  endTime?: number | null;
  availability?: number;
}
interface consultationSlotTime {
  startTime: string | number;
  slot_id: string;
}

export const OnlineConsulationForm = () => {
  const purposeOfLoansList = ["Mortgage", "Housing"];
  const [slotId, setSlotId] = useState("");
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState<number>();
  const [email, setEmail] = useState<string>("");
  const [purposeOfLoan, setPurposeOfLoan] = useState<string>("");
  const [, setDate] = useState<number | null>(null);
  const [consultationSlotTimes, setConsultationSlotTimes] = useState<
    consultationSlotTime[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const snackbar = useContext(SnackBarContext);

  const dateHandler = async (event: any) => {
    try {
      const selectedDate = dayjs(event).valueOf();
      const reqBody = {
        starttime: selectedDate / 1000,
        endtime: dayjs(event).add(1, "day").valueOf() / 1000,
      };
      setDate(selectedDate);
      setLoading(true);
      const resBody = await getScheduleForConsultationApi(reqBody);
      setLoading(false);
      const slotTimes = slotTimesFromData(resBody.data);
      setConsultationSlotTimes(slotTimes);
    } catch (err) {
      console.log("Error while fetching consultation slots");
    }
  };

  const slotTimesFromData = (dataArr: slotObj[]) => {
    return dataArr.map((dataObj: any) => {
      return {
        startTime: `${dayjs(dataObj.starttime * 1000).format(
          "hh:mm A"
        )} - ${dayjs(dataObj.endtime * 1000).format("hh:mm A")}`,
        slot_id: dataObj.id,
      };
    });
  };

  const bookConsultation = async () => {
    const body = {
      name,
      mobile: mobileNumber,
      email,
      purpose: purposeOfLoan,
      slot_id: slotId,
    };
    // TODO: Add a toast to show success/ fail message
    try {
      const res = await createConsultationApi(body);
      if (res.status === 200) {
        snackbar?.setMessage(`Consultation is Booked, Order Id: ${slotId}`);
        snackbar?.setToastVariant("success");
      }
      if (res.status === 500) {
        snackbar?.setMessage(`Consultation Booking Failed`);
        snackbar?.setToastVariant("error");
      }
    } catch (err) {
      console.log("consultation booking failed", err);
    }
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
    margin: "2px",
    textTransform: "none",
    backgroundColor: theme.palette.secondary.main,
  };

  const buttonPlacement = {
    marginLeft: "auto",
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
                value={name}
                onChange={(event) => setName(event.target.value)}
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
                onChange={(event) =>
                  setMobileNumber(parseInt(event.target.value))
                }
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                onChange={(event) => setPurposeOfLoan(event.target.value)}
                variant="standard"
                fullWidth
              >
                {purposeOfLoansList.map((element, ind) => {
                  return (
                    <MenuItem
                      value={element}
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
                  {consultationSlotTimes.length
                    ? "Pick a slot"
                    : "Select the date"}
                </InputLabel>
                <Select
                  value={slotId}
                  label="Time"
                  onChange={(event) => setSlotId(event.target.value)}
                  style={{ width: 160 }}
                  disabled={!consultationSlotTimes.length}
                >
                  {consultationSlotTimes?.map((schedule, ind) => {
                    return (
                      <MenuItem
                        value={schedule.slot_id}
                        key={`${ind + "date" + schedule.startTime}`}
                      >
                        {schedule.startTime}
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
              <div className="button-anim">
                <Button
                  className="highlight-button"
                  variant="contained"
                  sx={{ ...submitButton, position: "relative", zIndex: 1 }}
                  onClick={() => bookConsultation()}
                >
                  Request Consultation
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
