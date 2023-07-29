import React, { useState } from "react";
import { Typography, TextField, Box } from "@mui/material";
import { Container, Button, Alert, LinearProgress } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { StateContext } from "../../store/index";

export default function SubscribeCTA({ data }) {
  const host = process.env.REACT_APP_API_URL;
  // useFetch(`${host}/api/subscribers`, "SET_ABOUT");
  const [state, dispatch] = useContext(StateContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { email: state.email } }),
    };
    try {
      const res = await fetch("http://localhost:1337/api/subscribers", options);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error.message);
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
      dispatch({ type: "SET_EMAIL", payload: "" });
    }
  };
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
          {data.home_cta_title}
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
          {data.home_cta_subtitle}
        </Typography>
        <Box align="center">
          <form
            onSubmit={handleSubmit}
            className="cta-form"
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              maxWidth: "31.5rem",
            }}
            noValidate
            autoComplete="no"
          >
            <TextField
              required={true}
              size="normal"
              variant="standard"
              label="Email"
              autoComplete="off"
              sx={{
                width: { xs: "100%", sm: "20rem" },
              }}
              value={state.email}
              onChange={(event) =>
                dispatch({ type: "SET_EMAIL", payload: event.target.value })
              }
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
              }}
              disableElevation
              type="submit"
              variant="contained"
            >
              Subscribe
            </Button>

            {loading && (
              <Box
                sx={{ width: "99.5%", position: "absolute", bottom: "-0.1rem" }}
              >
                <LinearProgress />
              </Box>
            )}
            {success && (
              <Alert
                onClose={() => {
                  setSuccess(false);
                }}
                variant="filled"
                sx={{
                  position: "absolute",
                  bottom: "-4rem",
                  left: "0",
                }}
                severity="success"
              >
                Thanks for subscribing
              </Alert>
            )}
            {error && (
              <Alert
                onClose={() => {
                  setError(false);
                }}
                variant="filled"
                sx={{
                  position: "absolute",
                  bottom: "-4rem",
                  left: "0",
                }}
                severity="error"
              >
                An error occurred. Please try again.
              </Alert>
            )}
          </form>
        </Box>
      </Container>
    </div>
  );
}
