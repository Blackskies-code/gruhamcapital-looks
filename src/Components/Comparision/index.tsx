import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import theme from "../../theme";
import styles from "./style";

function createData(feature: string, us: string, others: string) {
  return { feature, us, others };
}

const unicodeRupeeSymbol = "\u20B9 ";

const Comparison = () => {
  const rows = [
    createData(
      "Processing Fee",
      unicodeRupeeSymbol + " 0 ",
      "0.25% + GST (" +
        unicodeRupeeSymbol +
        " 12,500 + " +
        unicodeRupeeSymbol +
        " 2,250 = " +
        unicodeRupeeSymbol +
        " 14,750 for 50 Lakhs)"
    ),
    createData(
      "CERSAI Charges",
      unicodeRupeeSymbol + " 0 ",
      unicodeRupeeSymbol + " 118 "
    ),
    createData(
      "Legal Charges",
      unicodeRupeeSymbol + " 0 ",
      unicodeRupeeSymbol + " 3540 "
    ),
    createData(
      "Technical Charges",
      unicodeRupeeSymbol + " 0 ",
      unicodeRupeeSymbol + " 3540 "
    ),
    createData(
      "Documentation",
      unicodeRupeeSymbol + "0 ",
      unicodeRupeeSymbol + "1000 to " + unicodeRupeeSymbol + "2000 "
    ),
    createData(
      "MODT Charges",
      "0.5% of loan amount (" + unicodeRupeeSymbol + "25,000 for 50Laks)",
      "0.5% of loan amount (" + unicodeRupeeSymbol + "25,000 for 50Laks)"
    ),
    createData(
      "Insurence",
      "Not Mandatory",
      "May force you to avail insurence"
    ),
    createData(
      "Support",
      "Premium Support, dedicated relationship manager",
      "Broken support, requires multiple follow-ups"
    ),
    createData(
      "Security Deposit",
      unicodeRupeeSymbol + "5900 ",
      "Not Applicable"
    ),
  ];

  const boxStyle = {
    background: theme.palette.secondary.contrastText,
    marginTop: 2,
    overflowX: "auto",
  };

  // const cellFormatForUs = {
  //   fontFamily: "Montserrat-Bold",
  //   background: "#d9efe3",
  // };

  // const cellFormatForOthers = {
  //   background: "#ffefea",
  // };

  const tableHeaderFormat = {
    fontFamily: "Montserrat-Bold",
  };
  const headerStyle = {
    fontSize: 35,
    fontFamily: "Montserrat-Bold",
  };

  return (
    <Box>
      <Typography
        sx={headerStyle}
        mb={2}
        ml={2}
        color={theme.palette.primary.contrastText}
      >
        Why Us ?
      </Typography>
      <Grid overflow={"auto"}>
        <Table sx={boxStyle} className="cardShadow">
          <TableHead sx={tableHeaderFormat}>
            <TableRow>
              <TableCell sx={styles.tableHeaderLedger}>Feature</TableCell>
              <TableCell align="right" sx={styles.tableHeaderUs}>
                Gruham Captial
              </TableCell>
              <TableCell align="right" sx={styles.tableHeaderOther}>
                Others
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.feature}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={styles.tableCellLedger}
                >
                  {row.feature}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    ...styles.tableCellUs,
                  }}
                >
                  {row.us}
                </TableCell>
                <TableCell align="right" sx={styles.tableCellOther}>
                  {row.others}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Box>
  );
};

export default Comparison;
