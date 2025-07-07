import { Box } from "@mui/material";
import { AdminHome } from "../Components/Admin/AdminHome";
import { ListSlots } from "../Components/Admin/ListSlots";

export const Admin = () => {
  return (
    <Box>
      <AdminHome />
      <ListSlots />
    </Box>
  );
};
