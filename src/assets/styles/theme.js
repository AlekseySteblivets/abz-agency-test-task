import { createTheme } from "@mui/material/styles";

import colors from "./_colors.scss";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.colorLightGrey,
    },
    secondary: {
      main: colors.colorSecondary,
    },
  },

  components: {
    // Name of the component
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "1.63",
          backgroundColor: colors.colorBlack,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          marginBottom: "50px",
        },
      },
    },
    // Tooltip: {
    //   backgroundColor: colors.Primary,
    // },
  },
});
