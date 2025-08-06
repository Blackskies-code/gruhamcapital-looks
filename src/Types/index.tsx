import type { GridRowId } from "@mui/x-data-grid";
import type { ReactNode } from "react";

export interface IListSlotsFilter {
  slotIdOrName?: string;
  startTime?: number;
  endTime?: number;
}

export interface IListConsultationFilter {
  consultationIdOrName?: string;
  starttime?: number;
  endtime?: number;
}
export interface LayoutProps {
  children?: ReactNode;
}

export interface AuthJson {
  admin_token: string;
}

export interface ISlotObject {
  id?: number | GridRowId | undefined;
  slotName?: string | null;
  description?: string | null;
  startTime?: number | null;
  endTime?: number | null;
  availability?: number;
  total?: number;
}
