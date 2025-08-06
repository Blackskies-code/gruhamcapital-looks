import theme from "../../theme";

const formStyle = {
  padding: 6,
  marginTop: 10,
  marginBottom: 4,
};

const boxStyle = {
  background: theme.palette.secondary.contrastText,
  padding: 0,
};

const headerStyle = {
  fontSize: 30,
  fontFamily: "Montserrat-Bold",
  textAlign: "center",
};

const inputGridStyle = {
  margin: 2,
  padding: 2,
  justifyContent: "center",
};

const cardHeaderStyle = {
  fontSize: 20,
  fontFamily: "Montserrat-Bold",
  textAlign: "left",
  marginBottom: 2,
};

const inputStyle = {
  marginBottom: 3,
};

const formLabelStyle = {
  alignContent: "end",
  justifyItems: "center",
};

const submitButton = {
  color: theme.palette.secondary.contrastText,
  borderRadius: 15,
  margin: "2px",
  textTransform: "none",
  backgroundColor: theme.palette.secondary.main,
};

const tableClass = {
  "& .MuiDataGrid-cell": {
    backgroundColor: "white",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#f5f5f5", // optional: light gray headers
    color: "white",
    borderColor: "white",
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "#f5f5f5", // optional: light gray footer
  },
  "& .MuiDataGrid-columnHeaders .MuiSvgIcon-fontSizeMedium": {
    color: "white",
  },
};

export default {
  formStyle,
  boxStyle,
  headerStyle,
  inputGridStyle,
  cardHeaderStyle,
  inputStyle,
  formLabelStyle,
  submitButton,
  tableClass,
};
