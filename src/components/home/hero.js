import React from "react";
import Appbar from "./appbar";
import { Typography, Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import cellc from "../../assets/cellc.svg";

export default function Hero({ data }) {
  return (
    <div className="hero">
      <Appbar />
      <Container
        disableGutters
        maxWidth="container"
        sx={{
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          height: "30rem",
          justifyContent: "space-between",
          pt: { xs: "5rem", md: "10rem" },
        }}
      >
        <Box sx={{ minWidth: { sm: "20rem", lg: "30rem" } }}>
          <Typography
            sx={{
              color: "#9AC9BC",
              mb: { xs: "15px", sm: "35px" },
            }}
            variant="h2"
            component="h1"
          >
            {data.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "rgba(140, 166, 158, 0.73)",
              maxWidth: "30rem",
              mb: { xs: "3rem", sm: "4rem" },
            }}
          >
            {data.subtitle}
          </Typography>
          <Link
            style={{
              display: "inline-block",
              textDecoration: "none",
            }}
            to="/contact"
          >
            <Button
              variant="contained"
              disableElevation
              style={{ borderRadius: 50 }}
              sx={{
                px: { xs: "60px", sm: "30px", lg: "2.3rem" },
                py: { xs: "12px", lg: "1rem" },
                color: "#E4EDEA",
                display: "block",
                fontSize: "1.125rem",
                fontWeight: 700,
                "&:hover": {
                  backgroundColor: "#146b7880",
                },
              }}
            >
              Get in touch
            </Button>
          </Link>
        </Box>
        <Box
          component="img"
          sx={{
            height: { xs: "15rem", sm: "30rem", lg: "40rem" },
            marginLeft: "-10rem",
            marginTop: { xs: "2rem", sm: "8rem", md: "4rem", lg: "0" },
            marginRight: "-15rem",
          }}
          alt="Logo"
          src={cellc}
        />
      </Container>
    </div>
  );
}
