import {
  Button,
  Container,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import theme from "../../../theme";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import styles from "../style";
import { createSlotsApi } from "../../../Services/Admin";

export const CreateSlots = () => {
  const [slotName, setSlotName] = useState<string>("");
  const [startTime, setStartTime] = useState<Dayjs | undefined>(dayjs());
  const [endTime, setEndTime] = useState<Dayjs | undefined>(dayjs());
  const [description, setDescription] = useState<string>("");
  const [consultationPerSlot, setConsultationPerSlot] = useState<number>();

  const createSlots = async () => {
    const body = {
      name: slotName,
      description,
      startTime: dayjs(startTime).valueOf(),
      endTime: dayjs(endTime).valueOf(),
      total: consultationPerSlot,
    };
    await createSlotsApi(body);
  };

  return (
    <Container sx={{ marginBottom: 4 }} maxWidth="lg">
      <Grid sx={[styles.formStyle, styles.boxStyle]}>
        <Typography sx={styles.headerStyle}>Admin Page</Typography>
      </Grid>
      {/* Create Slot */}
      <Grid className="cardShadow">
        <Grid sx={styles.inputGridStyle}>
          <Grid>
            <Typography sx={styles.cardHeaderStyle}>Create Slot</Typography>
          </Grid>
          {/* name */}
          <Grid sx={styles.inputStyle} container>
            <Grid sx={styles.formLabelStyle} size={{ md: 4, sm: 6, xs: 12 }}>
              <Typography style={{ alignSelf: "center" }}>Name:</Typography>
            </Grid>
            <Grid size={{ md: 8, sm: 6, xs: 12 }}>
              <TextField
                placeholder="enter name"
                variant="standard"
                value={slotName}
                onChange={(event) => setSlotName(event.target.value)}
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
          {/* Desc i/p */}
          <Grid container sx={styles.inputStyle}>
            <Grid sx={styles.formLabelStyle} size={{ md: 4, sm: 6, xs: 12 }}>
              <Typography>Description:</Typography>
            </Grid>
            <Grid size={{ md: 8, sm: 6, xs: 12 }}>
              <TextareaAutosize
                aria-label="minimum height"
                maxRows={3}
                minRows={3}
                placeholder="Enter Desc"
                value={description}
                style={{
                  width: theme.breakpoints.down("sm") ? "100%" : "50",
                }}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Grid>
          </Grid>
          {/* starttime */}
          <Grid container sx={styles.inputStyle}>
            <Grid
              sx={{ ...styles.formLabelStyle, alignContent: "center" }}
              size={{ md: 4, sm: 6, xs: 12 }}
            >
              <Typography>Start Time:</Typography>
            </Grid>
            <Grid size={{ md: 8, sm: 6, xs: 12 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="start date/time"
                  value={startTime}
                  onChange={(date) => (date ? setStartTime(date) : "")}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          {/* end time */}
          <Grid container sx={styles.inputStyle}>
            <Grid
              sx={{ ...styles.formLabelStyle, alignContent: "center" }}
              size={{ md: 4, sm: 6, xs: 12 }}
            >
              <Typography>End Time:</Typography>
            </Grid>
            <Grid size={{ md: 8, sm: 6, xs: 12 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="end date/time"
                  minDateTime={startTime}
                  value={endTime}
                  onChange={(date) => (date ? setEndTime(date) : "")}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          {/* Total Consultations per slot */}
          <Grid container sx={styles.inputStyle}>
            <Grid sx={styles.formLabelStyle} size={{ md: 4, sm: 6, xs: 12 }}>
              <Typography>Consultations per Slot:</Typography>
            </Grid>
            <Grid size={{ md: 8, sm: 6, xs: 12 }}>
              <TextField
                placeholder="total slots available"
                variant="standard"
                fullWidth
                value={consultationPerSlot}
                slotProps={{
                  input: { type: "number" },
                }}
                onChange={(event) =>
                  setConsultationPerSlot(parseInt(event.target.value))
                }
              ></TextField>
            </Grid>
          </Grid>
          {/* Submit Button */}
          <Grid style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              sx={{ ...styles.submitButton, position: "relative", zIndex: 1 }}
              onClick={createSlots}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
