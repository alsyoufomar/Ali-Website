import React from "react";
import "../styles/blog.css";
import Appbar from "../components/appbarDark";
import Footer from "../components/footer";
import { Typography, Container } from "@mui/material";
import Blogcard from "../components/Blog/blogCard";

export default function blog() {
  return (
    <div className="blog">
      <Appbar />
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "primary.dark",
            marginBottom: "35px",
            marginTop: "9.5rem",
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
            marginBottom: "3.5rem",
          }}
        >
          My latest researches, tips, tricks, insights and resources. hot off
          the presses.
        </Typography>
        <Blogcard />
      </Container>
      <Footer />
    </div>
  );
}
