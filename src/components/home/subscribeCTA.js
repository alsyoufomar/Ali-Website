import React from "react";
import cellc from "../../assets/cellc.svg";
import { Typography, TextField, Box, Container, Button } from "@mui/material";

export default function SubscribeCTA() {
  return (
    <div className="subscribe-cta">
      <Container disableGutters maxWidth="container">
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
            mb: { xs: "40px", sm: "50px", md: "60px" },
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
            className="cta-form"
            style={{
              display: "flex",
              justifyContent: "center",
              // flexDirection: { xs: "column", sm: "row" },
              // alignItems: "end",
            }}
            noValidate
            autoComplete="no"
          >
            <TextField
              required="true"
              size="normal"
              variant="standard"
              label="Email"
              sx={{
                width: { xs: "100%", sm: "20rem" },
              }}
            />
            <Button
              sx={{
                ml: { xs: "0", sm: "1rem" },
                mt: { xs: "1rem", sm: "0" },
                width: { xs: "100%", sm: "auto" },
                px: "2.7rem",
                py: "0.6rem",
                fontSize: "1.125rem",
                fontWeight: 700,
                // "&:hover": {
                //   backgroundColor: "#146b7880",
                // },
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
