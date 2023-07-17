import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Post from "./pages/post";
import About from "./pages/about";
import Contact from "./pages/contact";

let theme = createTheme({
  palette: {
    primary: {
      main: "#146B78",
      dark: "#031C21",
      light: "#E4EDEA",
    },
    secondary: {
      main: "#9AC9BC",
      light: "rgba(140, 166, 158, 0.73)",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      container: 1200,
      lg: 991,
      xl: 1920,
      customBreakpoint: 2000,
    },
  },

  myCustomColor: {
    main: "rgba(140, 166, 158, 0.73)",
  },

  typography: {
    fontFamily: "lato",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900,

    h2: {
      fontSize: "3.125rem",
      fontFamily: "poppins",
      fontWeight: 600,
      textTransform: "capitalize",
    },
    h3: {
      fontSize: "2.5rem",
      fontFamily: "poppins",
      fontWeight: 500,
      textTransform: "capitalize",
    },

    h5: {
      lineHeight: "123%",
      fontSize: "1.3125rem",
      fontWeight: 600,
      textTransform: "capitalize",
    },

    body2: {
      fontSize: "0.93rem",
      lineHeight: "148.5%",
    },

    subtitle1: {
      fontFamily: "lato",
      fontSize: "1.3125rem",
      fontWeight: "500",
      lineHeight: "151%",
      // textTransform: "capitalize",
    },
    caption: {
      fontSize: "14px",
      color: "grey",
    },
    button: {
      textTransform: "none",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h2: {
      [theme.breakpoints.down("lg")]: {
        fontSize: "2.8rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
    },

    h3: {
      [theme.breakpoints.down("lg")]: {
        fontSize: "2.1rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.9rem",
      },
    },

    h5: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },

    subtitle2: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
      },
    },

    subtitle1: {
      [theme.breakpoints.down("lg")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "17px",
      },
    },
  },
});
function App() {
  console.log("app rendered");
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
