import { Box, Grid, Typography } from "@mui/material";
import { CreateSlots } from "../Components/Admin/CreateSlots";
import { ListSlots } from "../Components/Admin/ListSlots";
import { ListConsultations } from "../Components/Admin/ListConsultations";
import styles from "../Components/Admin/style";

export const Admin = () => {
  return (
    <Box>
      <Grid sx={[styles.formStyle, styles.boxStyle]}>
        <Typography sx={styles.headerStyle}>Admin Page</Typography>
      </Grid>
      <CreateSlots />
      <ListSlots />
      <ListConsultations />
    </Box>
  );
};
