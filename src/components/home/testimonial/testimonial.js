import React from "react";
import Carousel from "./carousel";
import { Container, Typography, useMediaQuery, Box } from "@mui/material";
import celle from "../../../assets/celle.svg";

export default function Testimonial() {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const shouldDisableGutters = isMediumScreen && isLargeScreen;

  return (
    <div className="testemonials">
      <Container disableGutters maxWidth="container" sx={{ zIndex: "10" }}>
        <Typography
          sx={{
            color: "primary.dark",
            mb: { xs: "2rem", md: "3rem", lg: "4rem" },
            textAlign: "center",
          }}
          variant="h3"
          component="h2"
        >
          What people say about me
        </Typography>
        <Carousel />
      </Container>
      <Box
        component="img"
        sx={{
          height: { xs: "12rem", sm: "15rem", md: "20rem", lg: "25rem" },
          position: "absolute",
          bottom: "-3rem",
          right: "-5rem",
        }}
        alt="cell c"
        src={celle}
      />
    </div>
  );
}
