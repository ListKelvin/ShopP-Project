import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export const GlobalThemeOverride = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
