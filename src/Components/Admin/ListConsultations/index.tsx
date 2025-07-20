import {
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  styled,
} from "@mui/material";
import { DataGrid, type GridColDef, type GridRowId } from "@mui/x-data-grid";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import theme from "../../../theme";
import styles from "../style";
import dayjs, { Dayjs } from "dayjs";
import { deleteSlotsApi, fetchConsultationsApi } from "../../../Services/Admin";
import type { ISlotObject } from "../../../Types";

export const ListConsultations = () => {
  const [consultationIdOrName, setConsultationIdOrName] = useState("");
  const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [endTime, setEndTime] = useState<Dayjs | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<GridRowId>>(new Set());
  const [rows, setRows] = useState<ISlotObject[]>([]);

  const listConsultations = async () => {
    const body = {
      consultation_id: consultationIdOrName,
      startTime: dayjs(startTime).valueOf(),
      endTime: dayjs(endTime).valueOf(),
    };
    const data: ISlotObject[] = await fetchConsultationsApi(body);
    setRows(data);
  };

  const deleteSlots = async () => {
    if (!selectedRows?.size) return;

    try {
      // converting set to array using spread operator
      const deletedRowIds: GridRowId[] = [...selectedRows];
      await deleteSlotsApi(deletedRowIds);
      setRows((prev) =>
        prev.filter((row) => row.id !== undefined && !selectedRows.has(row.id))
      );
      selectedRows.clear();
      setSelectedRows(selectedRows);
    } catch (err) {
      console.log("error while deleting rows", err);
    }
  };

  // MUI Docs Reference - https://mui.com/x/react-data-grid/overlays/#no-rows-overlay
  const StyledGridOverlay = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    "& .no-rows-primary": {
      fill: "#3D4751",
      ...theme.applyStyles("light", {
        fill: "#AEB8C2",
      }),
    },
    "& .no-rows-secondary": {
      fill: "#1D2126",
      ...theme.applyStyles("light", {
        fill: "#E8EAED",
      }),
    },
  }));

  function customNoRowsOverlay() {
    return (
      <StyledGridOverlay>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={96}
          viewBox="0 0 452 257"
          aria-hidden
          focusable="false"
        >
          <path
            className="no-rows-primary"
            d="M348 69c-46.392 0-84 37.608-84 84s37.608 84 84 84 84-37.608 84-84-37.608-84-84-84Zm-104 84c0-57.438 46.562-104 104-104s104 46.562 104 104-46.562 104-104 104-104-46.562-104-104Z"
          />
          <path
            className="no-rows-primary"
            d="M308.929 113.929c3.905-3.905 10.237-3.905 14.142 0l63.64 63.64c3.905 3.905 3.905 10.236 0 14.142-3.906 3.905-10.237 3.905-14.142 0l-63.64-63.64c-3.905-3.905-3.905-10.237 0-14.142Z"
          />
          <path
            className="no-rows-primary"
            d="M308.929 191.711c-3.905-3.906-3.905-10.237 0-14.142l63.64-63.64c3.905-3.905 10.236-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142l-63.64 63.64c-3.905 3.905-10.237 3.905-14.142 0Z"
          />
          <path
            className="no-rows-secondary"
            d="M0 10C0 4.477 4.477 0 10 0h380c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 20 0 15.523 0 10ZM0 59c0-5.523 4.477-10 10-10h231c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 69 0 64.523 0 59ZM0 106c0-5.523 4.477-10 10-10h203c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 153c0-5.523 4.477-10 10-10h195.5c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 200c0-5.523 4.477-10 10-10h203c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 247c0-5.523 4.477-10 10-10h231c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10Z"
          />
        </svg>
        <Box sx={{ mt: 2 }}>No Results Found</Box>
      </StyledGridOverlay>
    );
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70, sortable: false },
    {
      field: "consultationName",
      headerName: "Consultation Name",
      width: 130,
      sortable: false,
    },
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
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Grid>
      {/* List/Delete Consultations */}
      <Grid sx={{ ...styles.inputGridStyle, marginBottom: 0 }}>
        <Typography sx={styles.cardHeaderStyle}>
          List/ Delete Consultation
        </Typography>
      </Grid>
      <Grid container>
        <Grid sx={{ ...styles.inputGridStyle, marginBottom: 0 }} container>
          <Typography sx={{ alignContent: "center", marginRight: 1 }}>
            Consultation Id/Name:{" "}
          </Typography>
          <TextField
            placeholder="consultation id/name"
            variant="standard"
            value={consultationIdOrName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setConsultationIdOrName(event.target.value)
            }
          ></TextField>
        </Grid>
        <Grid sx={{ ...styles.inputGridStyle, marginBottom: 0 }} container>
          <Typography sx={{ alignContent: "center", marginRight: 1 }}>
            Start Time:{" "}
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="start date/time"
              value={startTime}
              onChange={(date) => setStartTime(date)}
            />
          </LocalizationProvider>
        </Grid>
        <Grid sx={{ ...styles.inputGridStyle, marginBottom: 0 }} container>
          <Typography sx={{ alignContent: "center", marginRight: 1 }}>
            End Time:{" "}
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="end date/time"
              value={endTime}
              onChange={(date) => setEndTime(date)}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ justifyContent: "center", marginBottom: 2, gap: 4 }}
      >
        <Grid>
          <Button
            variant="contained"
            sx={{ ...styles.submitButton }}
            onClick={listConsultations}
          >
            Submit
          </Button>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            sx={{
              color: theme.palette.secondary.contrastText,
              borderRadius: 15,
              margin: "2px",
              textTransform: "none",
            }}
            color="error"
            onClick={deleteSlots}
          >
            Delete
          </Button>
        </Grid>
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
          onRowSelectionModelChange={(selection) => {
            if ("ids" in selection && selection.ids instanceof Set) {
              setSelectedRows(selection.ids);
            }
          }}
          sx={{
            border: 0,
            color: "black",
            backgroundColor: "white",
            ...styles.tableClass,
          }}
          slots={{
            noRowsOverlay: customNoRowsOverlay,
          }}
        />
      </Paper>
    </Grid>
  );
};
