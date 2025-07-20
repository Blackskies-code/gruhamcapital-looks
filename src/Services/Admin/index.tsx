import type { GridRowId } from "@mui/x-data-grid";
import axios from "axios";
import type {
  IListConsultationFilter,
  IListSlotsFilter,
  ISlotObject,
} from "../../Types";

export const deleteSlotsApi = async (idsArr: GridRowId[]) => {
  // axios.delete();
  console.log("appi call", idsArr);
};

export const fetchSlotsApi = async (reqBody: IListSlotsFilter) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/slots`, reqBody);
};

export const fetchConsultationsApi = async (
  reqBody: IListConsultationFilter
) => {
  console.log("req body", reqBody);
  return axios.post(`${import.meta.env.VITE_API_URL}/consultations`, reqBody);
};

export const createSlotsApi = async (reqBody: ISlotObject) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/add_slots`, reqBody);
};
