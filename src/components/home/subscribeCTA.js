import React from "react";
import cellc from "../../assets/cellc.svg";
import { Typography, TextField, Box, Container, Button } from "@mui/material";

export default function SubscribeCTA() {
  return (
    <div className="subscribe-cta">
      <Container maxWidth="lg">
        <Box
          component="img"
          sx={{
            height: "40rem",
            marginLeft: "-20rem",
            marginTop: "-24rem",
            marginBottom: "-15rem",
          }}
          alt="Logo"
          src={cellc}
        />
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
          Subscribe to My Blog
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
          Stay Informed and Inspired: Receive Exclusive Updates, Expert
          Insights, and Engaging Content by Subscribing to My Blog.
        </Typography>
        <Box align="center">
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
            noValidate
            autoComplete="false"
          >
            <TextField
              required="true"
              size="normal"
              variant="standard"
              label="Email"
              sx={{
                width: "20rem",
              }}
            />
            <Button
              sx={{
                marginLeft: "1rem",
                px: "2.7rem",
                py: "0.6rem",
                fontSize: "1.125rem",
                fontWeight: 700,
                "&:hover": {
                  backgroundColor: "#146b7880",
                },
              }}
              disableElevation
              type="submit"
              variant="contained"
            >
              Subscribe
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}
