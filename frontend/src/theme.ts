import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1f2937",
      light: "#374151",
      dark: "#111827",
    },
    secondary: {
      main: "#fbbf24",
      light: "#fcd34d",
      dark: "#f59e0b",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",

  },
});

export default theme;