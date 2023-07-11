import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Post from "./pages/post";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./styles/general.css";

const theme = createTheme({
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

    subtitle1: {
      fontFamily: "lato",
      fontSize: "1.3125rem",
      fontWeight: "500",
      lineHeight: "151%",
      textTransform: "capitalize",
    },

    button: {
      textTransform: "none",
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
