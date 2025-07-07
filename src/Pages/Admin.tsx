import { Box } from "@mui/material";
import { CreateSlot } from "../Components/Admin/CreateSlot";
import { ListSlots } from "../Components/Admin/ListSlots";

export const Admin = () => {
  return (
    <Box>
      <CreateSlot />
      <ListSlots />
    </Box>
  );
};
