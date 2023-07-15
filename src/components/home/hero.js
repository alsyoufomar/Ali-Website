import React from "react";
import Appbar from "./appbar";
import { Typography, Box, Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import cellc from "../../assets/cellc.svg";

const useStyles = makeStyles({
  innerContainer: {
    maxWidth: "1160px",
    marginLeft: "auto",
    marginRight: "auto",
    height: "20rem",
  },
});

export default function Hero() {
  const classes = useStyles();

  return (
    <div className="hero">
      <Appbar />
      <Container
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
              color: "secondary.main",
              mb: { xs: "15px", sm: "35px" },
              // marginTop: "13rem",
            }}
            variant="h2"
            component="h1"
          >
            Hello, My Name Is Ali
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "secondary.light",
              maxWidth: "30rem",
              mb: { xs: "3rem", sm: "35px" },
            }}
          >
            Exploring the Fascinating World of Chemistry Welcome to My Journey
            Through Molecules and Reactions
          </Typography>
          <Link
            style={{
              display: "inline-block",
              textDecoration: "none",
            }}
            to="/contact"
          >
            <Button
              // onClick={handleCloseNavMenu}
              variant="contained"
              disableElevation
              style={{ borderRadius: 50 }}
              sx={{
                px: { xs: "60px", sm: "30px", lg: "2.3rem" },
                py: { xs: "12px", lg: "1rem" },
                color: "primary.light",
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
