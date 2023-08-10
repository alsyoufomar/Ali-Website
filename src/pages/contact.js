import React, { useRef } from "react";
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
import { useContext, useState } from "react";
import { StateContext } from "../store/index";
import Loading from "./loading";
import ReqError from "./error";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet-async";

import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  Link,
  Alert,
  LinearProgress,
  Paper,
} from "@mui/material";

export default function Contact() {
  const captchaRef = useRef(null);
  const host = process.env.REACT_APP_API_URL;
  const { loading, error } = useFetch(`${host}/api/contact`, "SET_CONTACT");
  const [state] = useContext(StateContext);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [fieldsError, setFieldsError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("Error, Please try again.");

  if (loading) return <Loading />;
  if (error) return <ReqError props={error} />;
  if (!state.contact.data) return <></>;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    setFieldsError({
      name: !formData.name,
      email: !formData.email,
      message: !formData.message,
    });

    if (formData.name && formData.email && formData.message) {
      setFormLoading(true);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { ...formData, token } }),
      };

      try {
        const res = await fetch(`${host}/api/user-messages`, options);
        const json = await res.json();
        if (!res.ok) {
          if (json.error.message === "email must be a valid email") {
            setErrorMessage("Email must be a valid");
          } else {
            setErrorMessage(json.error.message);
          }
          throw new Error(json.error.message);
        } else {
          setFormSuccess(true);
        }
      } catch (err) {
        setFormError(true);
      } finally {
        setFormLoading(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="contact">
        <Helmet>
          <title>Contact me - Ali Alsyouf</title>
          <meta
            name="description"
            content="Feel free to contact me any time. I will get back to you as soon as I can!"
          />
          <link rel="canonical" href="/contact" />
        </Helmet>
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
              color: "secondary.dark",
              marginBottom: { xs: "60px", md: "135px" },
            }}
          >
            {state.contact.data.attributes.subtitle}
          </Typography>
          <Container disableGutters maxWidth="container">
            <Paper
              sx={{
                display: "flex",
                maxWidth: "100%",
                minHeight: "37.625rem",
                py: { xs: "2.5rem", sm: "3.5rem", md: "6rem" },
                px: { xs: "1rem", sm: "3rem", md: "0" },
                backgroundColor: "customColor.contactForm",
                alignItems: { xs: "start", md: "center" },
                justifyContent: "space-evenly",
                flexGrow: "1",
                flexDirection: { xs: "column", md: "row" },
                position: "relative",
                zIndex: "1000",
                borderRadius: { xs: "0.5rem", sm: "0.7rem", md: "1rem" },
              }}
              elevation={state.isDark ? 0 : 8}
            >
              <form
                onSubmit={handleSubmit}
                className="contact-form"
                noValidate
                autoComplete="false"
              >
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
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottom: state.isDark
                        ? "2px solid rgba(140, 166, 158, 0.73)"
                        : "",
                    },
                  }}
                  onChange={handleChange}
                  name="name"
                  value={formData.name}
                  autoComplete="off"
                  required={true}
                  fullWidth
                  label="Name"
                  variant="standard"
                  error={fieldsError.name}
                  helperText={fieldsError.name ? "Name is required" : ""}
                  FormHelperTextProps={{
                    style: { fontSize: "0.7rem" },
                  }}
                  inputProps={{
                    maxLength: 25,
                    sx: {
                      color: "customColor.input",
                      paddingBottom: "0.5rem",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "customColor.inputLabel",
                    },
                  }}
                />
                <TextField
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottom: state.isDark
                        ? "2px solid rgba(140, 166, 158, 0.73)"
                        : "",
                    },
                  }}
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                  autoComplete="off"
                  required={true}
                  fullWidth
                  label="Email"
                  variant="standard"
                  error={fieldsError.email}
                  helperText={fieldsError.email ? "Email is required" : ""}
                  FormHelperTextProps={{
                    style: { fontSize: "0.7rem" },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "customColor.inputLabel",
                    },
                  }}
                  inputProps={{
                    maxLength: 50,
                    sx: {
                      color: "customColor.input",
                      paddingBottom: "0.5rem",
                    },
                  }}
                />
                <TextField
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottom: state.isDark
                        ? "2px solid rgba(140, 166, 158, 0.73)"
                        : "",
                    },
                  }}
                  onChange={handleChange}
                  name="message"
                  value={formData.message}
                  autoComplete="off"
                  required={true}
                  multiline
                  rows={4}
                  fullWidth
                  label="Message"
                  variant="standard"
                  error={fieldsError.message}
                  helperText={fieldsError.message ? "Message is required" : ""}
                  FormHelperTextProps={{
                    style: { fontSize: "0.7rem" },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "customColor.inputLabel",
                    },
                  }}
                  inputProps={{
                    maxLength: 900,
                    sx: {
                      color: "customColor.input",
                      paddingBottom: "0.5rem",
                    },
                  }}
                />
                <ReCAPTCHA
                  className="captcha"
                  sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
                  ref={captchaRef}
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
                    "&:hover": {
                      backgroundColor: "#146b7880",
                    },
                  }}
                >
                  Send
                </Button>
                {formLoading && (
                  <Box
                    sx={{
                      width: "100%",
                      position: "absolute",
                      bottom: "0",
                    }}
                  >
                    <LinearProgress />
                  </Box>
                )}
                {formSuccess && (
                  <Alert
                    onClose={() => {
                      setFormSuccess(false);
                    }}
                    variant="filled"
                    sx={{
                      position: "absolute",
                      bottom: "-3.5rem",
                      left: "0",
                    }}
                    severity="success"
                  >
                    Message sent!
                  </Alert>
                )}
                {formError && (
                  <Alert
                    onClose={() => {
                      setFormError(false);
                    }}
                    variant="filled"
                    sx={{
                      position: "absolute",
                      bottom: { xs: "-4.7rem", sm: "-4rem" },
                      left: "0",
                    }}
                    severity="error"
                  >
                    {errorMessage}
                  </Alert>
                )}
              </form>
              <Box
                className="cover_image"
                sx={{
                  py: { xs: "1.5rem", sm: "2rem", md: "4rem" },
                  px: { xs: "1.5rem", sm: "3rem", md: "5%" },
                  mt: { xs: "1rem", md: "0" },
                  display: "flex",
                  flexShrink: "1",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  zIndex: "1000",
                  borderRadius: { xs: "0.5rem", sm: "0.7rem", md: "1rem" },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    marginBottom: "1rem",
                    fontWeight: "400",
                    fontFamily: "poppins",
                    color: "#9AC9BC",
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
            </Paper>
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
