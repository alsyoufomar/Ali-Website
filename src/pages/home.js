import React from "react";
import Container from "@mui/material/Container";
import Appbar from "../components/appbar";
import "../styles/home.css";
import { Paper, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import celld from "../assets/celld2.svg";
import img1 from "../assets/research1.jpg";
import img2 from "../assets/research2.jpg";
import img3 from "../assets/research3.jpg";
import arrow from "../assets/arrow.svg";

const useStyles = makeStyles({
  innerContainer: {
    maxWidth: "1160px",
    marginLeft: "auto",
    marginRight: "auto",
    height: "20rem",
  },
});

const serviceList = [
  {
    title: "Latest Virus research",
    body: "Core reagents for virus vaccines, diagnostic and drug R&D, Antigens/Antibodies/ELISA kits.",
    img: img1,
  },
  {
    title: "Vaccine research",
    body: "Core reagents for virus vaccines, diagnostic and drug R&D, Antigens/Antibodies/ELISA kits.",
    img: img2,
  },
  {
    title: "Development of medicine",
    body: "Core reagents for virus vaccines, diagnostic and drug R&D, Antigens/Antibodies/ELISA kits.",
    img: img3,
  },
];

export default function Home() {
  console.log("home rendered");

  const classes = useStyles();

  return (
    <div className="home">
      <div className="hero">
        <Appbar />
        <Toolbar className={classes.innerContainer}>
          <Box sx={{ maxWidth: "33.25rem" }}>
            <Typography
              sx={{
                color: "secondary.main",
                marginBottom: "35px",
                marginTop: "20rem",
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
                  color: "#fff",
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
              marginTop: "50rem",
              marginRight: "-100rem",
            }}
            alt="Logo"
            src={celld}
          />
        </Toolbar>
      </div>
      <div className="latest-research">
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "primary.dark",
              marginBottom: "22px",
              marginTop: "0",
              textAlign: "center",
            }}
            variant="h3"
            component="h2"
          >
            my latest research
          </Typography>
          <Typography
            sx={{
              maxWidth: "690px",
              mx: "auto",
              marginBottom: "93px",
              textAlign: "center",
            }}
            variant="subtitle1"
            color="gray"
          >
            Unveiling New Horizons: Discover the Latest Breakthroughs and
            Valuable Insights from My Recent Research Endeavors in
            [Research Area].
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            {serviceList.map((card) => (
              <Paper
                position="relative"
                sx={{ position: "relative" }}
                elevation={5}
              >
                <Box
                  sx={{
                    m: 3,
                    // paddingTop: "11rem",
                    // position: "absolute",
                    // right: 0,
                    // left: 0,
                    // top: "-3rem",
                  }}
                >
                  <Box
                    sx={{ width: "100%" }}
                    component="img"
                    alt="Logo"
                    src={card.img}
                  />
                  <Typography align="center" variant="h5">
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{ my: "0.5rem" }}
                    color="gray"
                    align="center"
                    variant="body2"
                  >
                    {card.body}
                  </Typography>
                  <Link
                    align="center"
                    style={{
                      display: "block",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                      textDecoration: "none",
                      color: "#146B78",
                      fontWeight: "500",
                    }}
                  >
                    Read More <img src={arrow} alt="arrow" />
                  </Link>
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </div>
      <div className="subscribe-cta"></div>
    </div>
  );
}
