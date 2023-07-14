import React from "react";
import "../styles/contact.css";
import Appbar from "../components/appbarDark";
import Footer from "../components/footer";
import { grey } from "@mui/material/colors";
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  Link,
} from "@mui/material";

export default function about() {
  return (
    <div className="about">
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
                marginBottom: "3rem",
              }}
            >
              Ali is a highly-acclaimed chemist from Amman, whose lifelong
              obsession with molecules and chemical reactions has propelled him
              to the forefront of the scientific world.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                fontSize: "1.1875rem",
                lineHeight: "160%",
                fontWeight: "500",
                maxWidth: "30.9375rem",
                marginBottom: "3rem",
              }}
            >
              This modern-day alchemist continues to defy the limits of academic
              conventions in his pursuit of ground-breaking advancements - a
              relentless approach that's revolutionized the field of chemistry.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                fontSize: "1.1875rem",
                lineHeight: "160%",
                fontWeight: "500",
                maxWidth: "30.9375rem",
              }}
            >
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
            }}
          ></Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
