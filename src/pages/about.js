import React from "react";
import "../styles/about.css";
import Appbar from "../components/appbarDark";
import Footer from "../components/footer";
import { Typography, Box, Container } from "@mui/material";
import aliPic from "../assets/ali-pic.jpg";

export default function about() {
  return (
    <div className="about">
      <Appbar />
      <Container
        maxWidth="lg"
        sx={{ height: "100%", marginBottom: "12.12rem" }}
      >
        <Typography
          sx={{
            color: "primary.dark",
            marginBottom: "35px",
            marginTop: "9.5rem",
          }}
          variant="h2"
          component="h1"
        >
          About Me
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                fontSize: "1.1875rem",
                lineHeight: "160%",
                fontWeight: "500",
                maxWidth: "30.9375rem",
                marginBottom: "10rem",
              }}
            >
              Ali is a highly-acclaimed chemist from Amman, whose lifelong
              obsession with molecules and chemical reactions has propelled him
              to the forefront of the scientific world.
              <br />
              <br />
              This modern-day alchemist continues to defy the limits of academic
              conventions in his pursuit of ground-breaking advancements - a
              relentless approach that's revolutionized the field of chemistry.
              <br />
              with an uncanny knack for deciphering the secrets hidden withen
              the atomic world, ali's impressive background testifies to an
              unwavering commitment to scientific discovery
            </Typography>
          </Box>
          <Box
            sx={{
              width: "32.875rem",
              height: "47.875rem",
              backgroundColor: "primary.dark",

              py: "2.2rem",
            }}
          >
            <Box
              component="img"
              alt="author image"
              src={aliPic}
              className="ali-pic"
            />
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
