import React from "react";
import Carousel from "./carousel";
import { Container, Typography } from "@mui/material";

export default function Testimonial() {
  return (
    <div className="testemonials">
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "primary.dark",
            marginBottom: "5.7rem",
            marginTop: "0",
            textAlign: "center",
          }}
          variant="h3"
          component="h2"
        >
          What people say about me
        </Typography>
        <Carousel />
      </Container>
    </div>
  );
}
