import React from "react";
import "../styles/contact.css";
import Appbar from "../components/appbarDark";
import Footer from "../components/footer/footer";
import { grey } from "@mui/material/colors";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import clock from "../assets/clock.svg";
import location from "../assets/location.svg";
import celle from "../assets/celle.svg";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { StateContext } from "../store/index";
import Loading from "./loading";
import ReqError from "./error";
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  Link,
} from "@mui/material";

export default function Contact() {
  const host = process.env.REACT_APP_API_URL;
  const { loading, error } = useFetch(`${host}/api/contact`, "SET_CONTACT");
  const [state] = useContext(StateContext);

  if (loading) return <Loading />;
  if (error) return <ReqError props={error} />;
  if (!state.contact.data) return <></>;

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
            {state.contact.data.attributes.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "gray",
              marginBottom: { xs: "60px", md: "135px" },
            }}
          >
            {state.contact.data.attributes.subtitle}
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
                    href={`mailto:${state.contact.data.attributes.email}?subject=${state.contact.data.attributes.email_subject}`}
                  >
                    {state.contact.data.attributes.email}
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
                    href={`tel:${state.contact.data.attributes.phone}`}
                  >
                    {state.contact.data.attributes.phone}
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
                    {state.contact.data.attributes.time}
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
                    {state.contact.data.attributes.location}
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
