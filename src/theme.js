import { createTheme } from "@mui/material/styles"
import createBreakpoints from "@mui/system/createTheme/createBreakpoints"

const breakPoints = createBreakpoints({})

const theme = createTheme({
  palette: {
    primary: {
      main: "green",
    },
    blue: {
      main: "blue",
    },
  },
  typography: {
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "39px",
      textTransform: "capitalize",
      color: "black",
      [breakPoints.up("md")]: {
        fontSize: "64px",
        lineHeight: "78px",
      },
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "29px",
      textTransform: "capitalize",
      color: "black",
    },
    body1: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      color: "black",
      [breakPoints.up("md")]: {
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: "29px",
      },
    },
    someStyle: {
      fontFamily: "Montserrat, sans-serif",
      textTransform: "capitalize",
    },
  },
  components: {
    // Name of the component
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "0.5px solid blue",
        },
        // Name of the slot
        root: {
          borderRadius: "8px",
          color: "black",
          fontSize: "16px",
          lineHeight: "20px",
          fontWeight: 500,
        },
      },
    },
  },
})

export default theme
