import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gradient: string;
  }
  interface PaletteOptions {
    gradient: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    gradient: true;
  }
}

export const theme = createTheme({
  palette: {
    background: {
      default: "#131212",
    },
    primary: {
      main: "#FFCC00",
    },
    text: {
      primary: "#D4D4D4",
      secondary: "#000"
    },
    gradient: "linear-gradient(90deg, rgba(255,244,0,1) 0%, rgba(255,197,60,1) 41%, rgba(255,46,113,1) 100%);",
    secondary: {
      main: "#242222",
    },
  },
  typography: {
    body1: {
      fontSize: "1.25rem"
    }
  },
  components: {
    MuiTypography:{
      styleOverrides: {
        root: {
          fontFamily: "Outfit"
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "unset",
        },
      },
    },
  },
});
