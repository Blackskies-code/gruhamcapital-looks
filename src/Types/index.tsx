import type { GridRowId } from "@mui/x-data-grid";
import type { Dayjs } from "dayjs";
import type { ReactNode } from "react";

export interface IListSlotsFilter {
  slotIdOrName?: string;
  startTime?: Dayjs;
  endTime?: Dayjs;
}

export interface IListConsultationFilter {
  consultationIdOrName?: string;
  startTime?: Dayjs;
  endTime?: Dayjs;
}

export interface IConsultationSchedule {
  time: string;
  availableSlots: string;
  bookedSlots?: string;
}

export interface LayoutProps {
  children?: ReactNode;
}

export interface AuthJson {
  password: string;
}

export interface IRowsForListSlots {
  id?: number | GridRowId | undefined;
  slotName?: string | null;
  description?: string | null;
  startTime?: number | null;
  endTime?: number | null;
  availability?: number;
}
