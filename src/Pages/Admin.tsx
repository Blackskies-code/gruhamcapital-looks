import { Box } from "@mui/material";
import { CreateSlots } from "../Components/Admin/CreateSlots";
import { ListSlots } from "../Components/Admin/ListSlots";
import { ListConsultations } from "../Components/Admin/ListConsultations";

export const Admin = () => {
  return (
    <Box>
      <CreateSlots />
      <ListSlots />
      <ListConsultations />
    </Box>
  );
};
