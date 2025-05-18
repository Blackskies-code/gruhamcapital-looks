import { Box, Tab, Tabs } from "@mui/material";
import theme from "../../../theme";
import { useState } from "react";
import { HomeLoanCalculator } from "../HomeLoanCalculator";

export const Calculators = () => {
  const [tabNumber, setTabNumber] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("value", newValue);
    setTabNumber(newValue);
  };
  const boxStyle = {
    marginTop: 5,
    marginBottom: 5,
    background: theme.palette.secondary.contrastText,
    padding: 0,
  };

  const tabStyles = {
    fontWeight: 500,
  };
  return (
    <>
      <Box sx={boxStyle} className="cardShadow">
        <Tabs
          value={tabNumber}
          onChange={handleChange}
          variant="standard"
          sx={tabStyles}
        >
          <Tab label="EMI Calculator" />
        </Tabs>
        {tabNumber === 0 && <HomeLoanCalculator />}
      </Box>
    </>
  );
};

// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// export default function ColorTabs() {
//   const [value, setValue] = React.useState('one');

//   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         textColor="secondary"
//         indicatorColor="secondary"
//         aria-label="secondary tabs example"
//       >
//         <Tab value="one" label="Item One" />
//         <Tab value="two" label="Item Two" />
//         <Tab value="three" label="Item Three" />
//       </Tabs>
//     </Box>
//   );
// }
