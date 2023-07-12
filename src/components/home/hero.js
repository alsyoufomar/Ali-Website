import React from "react";
import Appbar from "./appbar";
import { Typography, Box, Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import celld from "../../assets/celld2.svg";

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
        maxWidth="lg"
        sx={{ mx: "auto", display: "flex", height: "30rem" }}
        // className={classes.innerContainer}
      >
        <Box sx={{ maxWidth: "33.25rem" }}>
          <Typography
            sx={{
              color: "secondary.main",
              marginBottom: "35px",
              marginTop: "13rem",
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
              marginBottom: "3.5rem",
            }}
          >
            Exploring the Fascinating World of Chemistry Welcome to My Journey
            Through <br /> Molecules and Reactions
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
                // my: 4,
                px: "2.3rem",
                py: "1rem",
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
            height: "40rem",
            marginLeft: "3rem",
            marginTop: "20rem",
            marginRight: "-100rem",
          }}
          alt="Logo"
          src={celld}
        />
      </Container>
    </div>
  );
}
