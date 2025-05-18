import theme from "../../../theme";

const tableCellUs = {
  color: theme.palette.secondary.main,
  padding: 3,
  border: "1px 1px 1px 1px",
  fontWeight: 700,
  borderColor: theme.palette.secondary.main,
};

const tableHeaderUs = {
  fontFamily: "BiomeW01-SemiBold",
  fontSize: 25,
  ...tableCellUs,
};

const tableCellOther = {
  color: "#FF4800",
  padding: 3,
  border: "1px 1px 1px 1px",
  borderColor: "#FF4800",
};

const tableHeaderOther = {
  fontWeight: 600,
  fontSize: 25,
  ...tableCellOther,
};

const tableCellLedger = {
  color: theme.palette.primary.main,
  padding: 3,
  border: "1px 1px 1px 1px",
  borderColor: theme.palette.primary.main,
};

const tableHeaderLedger = {
  fontWeight: 600,
  fontSize: 25,
  ...tableCellLedger,
};

export default {
  tableCellUs,
  tableHeaderUs,
  tableCellOther,
  tableHeaderOther,
  tableCellLedger,
  tableHeaderLedger,
};
