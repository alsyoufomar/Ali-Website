import React from "react";
import "../styles/contact.css";
import Appbar from "../components/appbarDark";
import Footer from "../components/footer";
import { grey } from "@mui/material/colors";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import clock from "../assets/clock.svg";
import location from "../assets/location.svg";
import celle from "../assets/celle.svg";
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  Link,
} from "@mui/material";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <Appbar />
        <Container disableGutters maxWidth="container">
          <Typography
            sx={{
              color: "primary.dark",
              marginBottom: "25px",
              marginTop: { xs: "60px", md: "135px" },
            }}
            variant="h2"
            component="h1"
          >
            Contact Me
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "gray",
              marginBottom: { xs: "60px", md: "135px" },
            }}
          >
            Feel free to contact me any time. I will get back to you as soon as
            I can!
          </Typography>
          <Container disableGutters maxWidth="container">
            <Box
              sx={{
                maxWidth: "100%",
                minHeight: "37.625rem",
                py: { xs: "2rem", sm: "3rem", md: "4rem" },
                px: { xs: "1.5rem", sm: "3rem", md: "0" },
                backgroundColor: "#A3B8B2",
                display: "flex",
                alignItems: { xs: "start", md: "center" },
                justifyContent: "space-evenly",
                flexGrow: "1",
                flexDirection: { xs: "column", md: "row" },
                position: "relative",
                zIndex: "100000",
              }}
            >
              <form className="contact-form" noValidate autoComplete="false">
                <Typography
                  variant="h4"
                  sx={{
                    marginBottom: "1rem",
                    fontWeight: "400",
                    fontFamily: "poppins",
                    color: "primary.dark",
                  }}
                >
                  Get in touch
                </Typography>
                <TextField
                  autoComplete="no"
                  fullWidth
                  label="Name"
                  variant="standard"
                  inputProps={{
                    sx: {
                      color: "primary.Dark",
                      paddingBottom: "0.5rem",
                    },
                  }}
                />
                <TextField
                  autoComplete="no"
                  fullWidth
                  label="Email"
                  variant="standard"
                  inputProps={{
                    sx: {
                      color: "primary.Dark",
                      paddingBottom: "0.5rem",
                    },
                  }}
                />
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  label="Message"
                  variant="standard"
                  inputProps={{
                    sx: {
                      color: "primary.Dark",
                      paddingBottom: "0.5rem",
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  disableElevation
                  sx={{
                    lineHeight: "1.5rem",
                    fontWeight: "500",
                    fontSize: "1.125rem",
                    py: "1rem",
                  }}
                >
                  Send
                </Button>
              </form>
              <Box
                className="cover_image"
                sx={{
                  py: { xs: "1.5rem", sm: "2rem", md: "4rem" },
                  px: { xs: "1.5rem", sm: "3rem", md: "5%" },
                  display: "flex",
                  flexShrink: "1",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  zIndex: "1000",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    marginBottom: "1rem",
                    fontWeight: "400",
                    fontFamily: "poppins",
                    color: "secondary.main",
                  }}
                >
                  Info.
                </Typography>
                <Box display="flex">
                  <Box
                    component="img"
                    alt="mail"
                    src={mail}
                    marginRight="0.5rem"
                  />
                  <Link
                    sx={{
                      color: grey[400],
                      textDecoration: "none",
                      display: "block",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                    href="mailto:alosh.alsyouf1999@gmail.com?subject=Mail from My Site"
                  >
                    alosh.alsyouf1999@gmail.com
                  </Link>
                </Box>

                <Box display="flex">
                  <Box
                    component="img"
                    alt="phone"
                    src={phone}
                    marginRight="0.4rem"
                  />
                  <Link
                    sx={{
                      color: grey[400],
                      textDecoration: "none",
                      display: "block",
                    }}
                    href="tel:+962785458750"
                  >
                    +962 7 8545 8750
                  </Link>
                </Box>

                <Box display="flex">
                  <Box
                    component="img"
                    alt="time"
                    src={clock}
                    marginRight="0.5rem"
                  />
                  <Typography
                    sx={{
                      color: grey[400],
                    }}
                  >
                    9:00 - 18:00
                  </Typography>
                </Box>

                <Box display="flex">
                  <Box
                    component="img"
                    alt="location"
                    src={location}
                    marginRight="0.5rem"
                  />
                  <Typography
                    sx={{
                      color: grey[400],
                    }}
                  >
                    Amman, Jordan
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
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
