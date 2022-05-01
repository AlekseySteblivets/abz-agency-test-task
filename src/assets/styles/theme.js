import { createTheme } from "@mui/material/styles";
import colors from "./_colors.scss";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.colorPrimary,
    },
    secondary: {
      main: colors.colorSecondary,
    },
  },
});
