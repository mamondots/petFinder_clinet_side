import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6504B5",
    },
    secondary: {
      main: "#666f73",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px", //* button padding set
        },
      },
    },
    //* default container set
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
  },
  //* for using text color
  typography: {
    body1: {
      color: "##1F345D",
    //   #0B1134CC
    },
    body2: {
      color: "#1F345D"
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
