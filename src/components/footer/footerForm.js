import React, { useState } from "react";
import "../../styles/home.css";
import { makeStyles } from "@mui/styles";
import EastIcon from "@mui/icons-material/East";
import {
  Typography,
  Box,
  TextField,
  IconButton,
  Alert,
  LinearProgress,
} from "@mui/material";

const useStyles = makeStyles({
  footerSectionTitle: {
    color: "#9AC9BC",
  },
  footerSectionItem: {
    color: "rgba(140, 166, 158, 0.73)",
  },
  input: {
    "& .MuiInput-underline:before": {
      borderBottom: "2px solid rgba(140, 166, 158, 0.73)",
    },
    "& .MuiInput-underline:before:hover": {
      borderBottom: "2px solid rgba(140, 166, 158, 0.73)",
    },
  },
});

export default function FooterForm() {
  const classes = useStyles();

  const host = process.env.REACT_APP_API_URL;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(
    "An error occurred. Please try again."
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { email } }),
    };
    try {
      const res = await fetch(`${host}/api/subscribers`, options);
      const json = await res.json();
      if (!res.ok) {
        if (json.error.message === "This attribute must be unique") {
          setErrorMessage("You are already subscribed.");
        } else if (json.error.message === "email must be a valid email") {
          setErrorMessage("Email must be a valid");
        } else if (json.error.message === "email cannot be empty") {
          setErrorMessage("Email cannot be empty");
        } else {
          setErrorMessage(json.error.message);
        }
        throw new Error(json.error.message);
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
      setEmail("");
    }
  };
  return (
    <Box
      className="footer-cta"
      sx={{ width: { xs: "100%", sm: "16rem" }, maxWidth: "16rem" }}
    >
      <Typography
        className={classes.footerSectionTitle}
        variant="h6"
        sx={{ marginBottom: "1.6rem" }}
      >
        Stay up to date
      </Typography>
      <Typography
        sx={{ color: "secondary.light", marginBottom: "0.7rem" }}
        variant="body1"
      >
        Subscribe to my blog
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          position: "relative",
          marginBottom: "3rem",
        }}
        noValidate
        autoComplete="no"
      >
        <TextField
          className={classes.input}
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          autoComplete="off"
          required={true}
          size="normal"
          variant="standard"
          label="Email"
          sx={{
            "& .MuiInputLabel-root": {
              marginTop: "-0.2rem",
            },
            width: "100%",
            "& .MuiInput-underline:before": {
              borderBottomColor: "2px solid rgba(140, 166, 158, 0.73)",
            },
            "&:hover .MuiInput-underline:before": {
              borderBottom: "2px solid rgba(140, 166, 158, 0.73)",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "secondary.light",
              textTransform: "capitalize",
            },
          }}
          inputProps={{
            maxLength: 50,
            sx: {
              color: "gray",
              paddingBottom: "0.5rem",
            },
          }}
        />
        <IconButton
          disableFocusRipple={true}
          sx={{
            boxShadow: "none",
            position: "absolute",
            right: "-0.7rem",
            top: "0.7rem",
            "&:hover": {
              backgroundColor: "#146b7880",
            },
          }}
          type="submit"
          variant="text"
        >
          <EastIcon fontSize="medium" color="primary" />
        </IconButton>
        {loading && (
          <Box
            sx={{
              width: "100%",
              position: "absolute",
              bottom: "-0.1rem",
            }}
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
              top: "4rem",
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
              top: "4rem",
              left: "0",
            }}
            severity="error"
          >
            {errorMessage}
          </Alert>
        )}
      </form>
    </Box>
  );
}
