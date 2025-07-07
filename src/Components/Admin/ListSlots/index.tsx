import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import styles from "../style";

interface IListSlots {
  slotIdOrName?: string;
  startTime?: Dayjs;
  endTime?: Dayjs;
}
export const ListSlots = () => {
  const [listSlots, setListSlots] = useState<IListSlots>({
    slotIdOrName: "",
    startTime: dayjs(),
    endTime: dayjs(),
  });
  const handleListSlotsInputs = () => {
    console.log("slots values", listSlots);
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70, sortable: false },
    { field: "slotName", headerName: "Slot Name", width: 130, sortable: false },
    {
      field: "description",
      headerName: "Description",
      width: 260,
      sortable: false,
    },
    {
      field: "startTime",
      headerName: "Start Time",
      width: 150,
      sortable: false,
    },
    {
      field: "endTime",
      headerName: "End Time",
      width: 150,
      sortable: false,
    },
    {
      field: "availability",
      headerName: "Availability",
      width: 100,
      sortable: false,
    },
  ];

  const rows = [
    {
      id: 1,
      slotName: "Snow",
      description: "Jon",
      startTime: 35,
      endTime: 45,
      availability: 10,
    },
    {
      id: 2,
      slotName: "Lannister",
      description: "Cersei",
      startTime: 42,
      endTime: 50,
      availability: 10,
    },
    {
      id: 3,
      slotName: "Lannister",
      description: "Jaime",
      startTime: 45,
      endTime: 55,
      availability: 10,
    },
    {
      id: 4,
      slotName: "Stark",
      description: "Arya",
      startTime: 16,
      endTime: 60,
      availability: 10,
    },
    {
      id: 5,
      slotName: "Targaryen",
      description: "Daenerys",
      startTime: null,
      endTime: 70,
      availability: 10,
    },
    {
      id: 6,
      slotName: "Melisandre",
      description: null,
      startTime: 150,
      endTime: 170,
      availability: 10,
    },
    {
      id: 7,
      slotName: "Clifford",
      description: "Ferrara",
      startTime: 44,
      endTime: 80,
      availability: 10,
    },
    {
      id: 8,
      slotName: "Frances",
      description: "Rossini",
      startTime: 36,
      endTime: 75,
      availability: 10,
    },
    {
      id: 9,
      slotName: "Roxie",
      description: "Harvey",
      startTime: 65,
      endTime: 85,
      availability: 10,
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Grid>
      <Grid sx={{ ...styles.inputGridStyle, marginBottom: 0 }}>
        <Typography sx={styles.cardHeaderStyle}>List/ Delete Slot</Typography>
      </Grid>
      <Grid container>
        <Grid sx={{ ...styles.inputGridStyle, marginBottom: 0 }} container>
          <Typography sx={{ alignContent: "center", marginRight: 1 }}>
            Slot Id/Name:{" "}
          </Typography>
          <TextField
            placeholder="slot id/name"
            variant="standard"
            value={listSlots?.slotIdOrName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setListSlots((prev) => ({
                ...prev,
                slotIdOrName: event.target.value,
              }))
            }
          ></TextField>
        </Grid>
        <Grid sx={{ ...styles.inputGridStyle, marginBottom: 0 }} container>
          <Typography sx={{ alignContent: "center", marginRight: 1 }}>
            Slot Start Time:{" "}
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="start date/time"
              value={listSlots.startTime}
              onChange={(date) =>
                date
                  ? setListSlots((prev) => ({ ...prev, startTime: date }))
                  : ""
              }
            />
          </LocalizationProvider>
        </Grid>
        <Grid sx={{ ...styles.inputGridStyle, marginBottom: 0 }} container>
          <Typography sx={{ alignContent: "center", marginRight: 1 }}>
            Slot End Time:{" "}
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="end date/time"
              value={listSlots.endTime}
              onChange={(date) =>
                date ? setListSlots((prev) => ({ ...prev, endTime: date })) : ""
              }
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid sx={{ textAlign: "center", marginBottom: 2 }}>
        <Button
          variant="contained"
          sx={{ ...styles.submitButton }}
          onClick={handleListSlotsInputs}
        >
          Submit
        </Button>
      </Grid>
      <Paper
        sx={{
          height: 400,
          width: "100%",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{
            border: 0,
            color: "black",
            backgroundColor: "white",
            ...styles.tableClass,
          }}
        />
      </Paper>
    </Grid>
  );
};
