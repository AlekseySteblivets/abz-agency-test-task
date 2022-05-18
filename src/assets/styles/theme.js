import { createTheme } from "@mui/material/styles";

import colors from "./_colors.scss";

export const theme = createTheme({
  fontFamily: [
    "Nunito",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),

  palette: {
    primary: {
      main: colors.colorLightGrey,
    },
    secondary: {
      main: colors.colorSecondary,
    },
  },
});
