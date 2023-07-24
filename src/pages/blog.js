import React from "react";
import "../styles/blog.css";
import Appbar from "../components/appbarDark";
import Footer from "../components/footer";
import { Typography, Container, Button, Box } from "@mui/material";
import Blogcard from "../components/Blog/blogCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { grey } from "@mui/material/colors";
import celle from "../assets/celle.svg";

export default function Blog() {
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
            Blog
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "gray",
              marginBottom: "3rem",
            }}
          >
            My latest researches, tips, tricks, insights and resources. hot off
            the presses.
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
