import { Box } from "@mui/material";
import { CreateSlots } from "../Components/Admin/CreateSlots";
import { ListSlots } from "../Components/Admin/ListSlots";

export const Admin = () => {
  return (
    <Box>
      <CreateSlots />
      <ListSlots />
    </Box>
  );
};
