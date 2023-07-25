import React from "react";
import "../styles/blog.css";
import Appbar from "../components/appbarDark";
import Footer from "../components/footer";
import { Typography, Container, Button, Box } from "@mui/material";
import Blogcard from "../components/Blog/blogCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { grey } from "@mui/material/colors";
import celle from "../assets/celle.svg";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { StateContext } from "../store/index";

export default function Blog() {
  const host = process.env.REACT_APP_API_URL;
  useFetch(`${host}/api/blog-static`, "SET_BLOG_STATIC");
  const [state] = useContext(StateContext);

  if (!state.blog_static.data) return <></>;

  return (
    <>
      <div className="blog">
        <Appbar />
        <Container sx={{ zIndex: "1000" }} disableGutters maxWidth="container">
          <Typography
            sx={{
              color: "primary.dark",
              marginBottom: "25px",
              marginTop: { xs: "60px", md: "135px" },
            }}
            variant="h2"
            component="h1"
          >
            {state.blog_static.data.attributes.blog_title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "gray",
              marginBottom: "3rem",
            }}
          >
            {state.blog_static.data.attributes.blog_subtitle}
          </Typography>
          <Blogcard />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              endIcon={<ExpandMoreIcon />}
              disableElevation
              variant="contained"
              sx={{
                zIndex: "1000",
                backgroundColor: grey[400],
                color: "primary.dark",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
                px: "22px",
                py: "10px",
                lineHeight: "20px",
                fontWeight: "600",
                fontFamily: "poppins",
                // backgroundColor: "grey",
                // color: "primary.dark",
              }}
            >
              Expand
            </Button>
          </Box>
        </Container>
        <Box
          component="img"
          sx={{
            height: { xs: "12rem", sm: "15rem", md: "20rem", lg: "25rem" },
            position: "absolute",
            bottom: "-3rem",
            right: "-5rem",
          }}
          alt="cell e"
          src={celle}
        />
      </div>
      <Footer />
    </>
  );
}
