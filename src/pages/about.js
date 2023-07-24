import React from "react";
import "../styles/about.css";
import Appbar from "../components/appbarDark";
import Footer from "../components/footer";
import { Typography, Box, Container } from "@mui/material";
import aliPic from "../assets/ali-pic.jpg";
import celle from "../assets/celle.svg";

export default function about() {
  return (
    <>
      <div className="about">
        <Appbar />
        <Container disableGutters maxWidth="container" sx={{ height: "100%" }}>
          <Typography
            sx={{
              color: "primary.dark",
              marginBottom: "35px",
              marginTop: { xs: "60px", md: "135px" },
            }}
            variant="h2"
            component="h1"
          >
            About Me
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "start" },
              justifyContent: "space-between",
              gap: { xs: "3rem", lg: "4rem" },
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
                  maxWidth: { xs: "100%", md: "30.9375rem" },
                  minWidth: { xs: "35vw", lg: "25rem" },
                  // marginBottom: "10rem",
                }}
              >
                Ali is a highly-acclaimed chemist from Amman, whose lifelong
                obsession with molecules and chemical reactions has propelled
                him to the forefront of the scientific world.
                <br />
                <br />
                This modern-day alchemist continues to defy the limits of
                academic conventions in his pursuit of ground-breaking
                advancements - a relentless approach that's revolutionized the
                field of chemistry.
                <br />
                with an uncanny knack for deciphering the secrets hidden withen
                the atomic world, ali's impressive background testifies to an
                unwavering commitment to scientific discovery
              </Typography>
            </Box>
            <Box
              sx={{
                mt: "10px",
                px: "1rem",
                maxHeight: "700px",
                zIndex: "1000",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "primary.dark",
                  py: "2rem",
                }}
              >
                <Box
                  sx={{
                    maxWidth: "100%",
                    maxHeight: { xs: "500px", md: "700px" },
                    objectFit: "cover",
                    objectPosition: "center 50%",
                    ml: "10%",
                  }}
                  component="img"
                  alt="author image"
                  src={aliPic}
                />
              </Box>
            </Box>
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
