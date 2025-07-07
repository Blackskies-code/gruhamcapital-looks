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

export const CreateSlots = () => {
  const [slotName, setSlotName] = useState<string>("");
  const [startDateTime, setStartDateTime] = useState<Dayjs>(dayjs());
  const [endDateTime, setEndDateTime] = useState<Dayjs>(dayjs());

  const handleSlotName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlotName(event.target.value);
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
                onChange={handleSlotName}
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
                style={{
                  width: theme.breakpoints.down("sm") ? "100%" : "50",
                }}
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
                  value={startDateTime}
                  onChange={(date) => (date ? setStartDateTime(date) : "")}
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
                  minDateTime={startDateTime}
                  value={endDateTime}
                  onChange={(date) => (date ? setEndDateTime(date) : "")}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          {/* Availability per slot */}
          <Grid container sx={styles.inputStyle}>
            <Grid sx={styles.formLabelStyle} size={{ md: 4, sm: 6, xs: 12 }}>
              <Typography>Availability per Slot:</Typography>
            </Grid>
            <Grid size={{ md: 8, sm: 6, xs: 12 }}>
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
              sx={{ ...styles.submitButton, position: "relative", zIndex: 1 }}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* List/Delete Slot */}
    </Container>
  );
};
