import type { GridRowId } from "@mui/x-data-grid";
import axios from "axios";
import type { IListSlotsFilter } from "../../Types";

export const deleteSlotsApi = async (idsArr: GridRowId[]) => {
  // axios.delete();
  console.log("appi call", idsArr);
};

export const fetchSlotsApi = async (slotFilterObj: IListSlotsFilter) => {
  return [
    {
      id: 6456121,
      slotName: "Snow",
      description: "Jon",
      startTime: 35,
      endTime: 45,
      availability: 10,
    },
    {
      id: 24650,
      slotName: "Lannister",
      description: "Cersei",
      startTime: 42,
      endTime: 50,
      availability: 10,
    },
    {
      id: 34542,
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
};
