import React from "react";
import "../styles/home.css";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/ali.svg";
import copyright from "../assets/copyright.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import { makeStyles } from "@mui/styles";
import EastIcon from "@mui/icons-material/East";
import cellc from "../assets/cellc.svg";

import {
  Typography,
  Box,
  TextField,
  Container,
  Link,
  IconButton,
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
  },
});

const menu = [
  { name: "Home", route: "" },
  { name: "Blog", route: "blog" },
  { name: "About", route: "about" },
  { name: "Contact", route: "contact" },
];

const social = [
  { name: "Facebook", link: "#", image: facebook },
  { name: "Instagram", link: "#", image: instagram },
  { name: "Twitter", link: "#", image: twitter },
];

export default function Footer() {
  const classes = useStyles();

  return (
    <div className="footer">
      <Container
        disableGutters
        maxWidth="container"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Container
          maxWidth="container"
          disableGutters={true}
          sx={{
            display: "flex",
            justifyContent: { xs: "start", lg: "space-between" },
            flexWrap: "wrap",
            gap: "3.35rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mr: { xs: "4rem", lg: "0" },
            }}
          >
            <RouterLink to="/">
              <Box
                component="img"
                sx={{ height: 20, marginTop: "0.5rem" }}
                alt="Logo"
                src={logo}
              />
            </RouterLink>
            <Typography
              sx={{
                my: "1.6rem",
                maxWidth: "14rem",
                color: "secondary.light",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </Typography>
            <Link
              sx={{ color: "secondary.light", textDecoration: "none" }}
              href="mailto:alosh.alsyouf1999@gmail.com?subject=Mail from My Site"
            >
              alosh.alsyouf1999@gmail.com
            </Link>
            <Link
              sx={{
                color: "secondary.light",
                textDecoration: "none",
                marginTop: "0.3rem",
              }}
              href="tel:+962785458750"
            >
              +962 7 8545 8750
            </Link>
          </Box>
          <Box sx={{ mr: { xs: "4rem", lg: "0" } }}>
            <Typography
              variant="h6"
              sx={{ marginBottom: "1.7rem" }}
              className={classes.footerSectionTitle}
            >
              Menu
            </Typography>
            {menu.map((item, i) => (
              <RouterLink
                key={i}
                to={"/" + item.route}
                style={{
                  display: "block",
                  textDecoration: "none",
                  marginBottom: "0.9rem",
                  color: "rgba(140, 166, 158, 0.73)",
                }}
              >
                {item.name}
              </RouterLink>
            ))}
          </Box>
          <Box sx={{ mr: { xs: "auto", lg: "0" } }}>
            <Typography
              variant="h6"
              sx={{ marginBottom: "1.7rem" }}
              className={classes.footerSectionTitle}
            >
              Social
            </Typography>
            {social.map((item, i) => (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener"
                sx={{
                  display: "block",
                  textDecoration: "none",
                  marginBottom: "0.9rem",

                  color: "rgba(140, 166, 158, 0.73)",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 15,
                    marginRight: "0.5rem",
                    verticalAlign: "-2px",
                  }}
                  alt="Logo"
                  src={item.image}
                />
                {item.name}
              </Link>
            ))}
          </Box>
          <Box
            className="footer-cta"
            sx={{ width: { xs: "100%", sm: "16rem" }, maxWidth: "16rem" }}
          >
            <Typography
              variant="h6"
              sx={{ marginBottom: "1.6rem" }}
              className={classes.footerSectionTitle}
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
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                position: "relative",
                marginBottom: "3rem",
              }}
              noValidate
              autoComplete="false"
            >
              <TextField
                className={classes.input}
                required="true"
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
                  sx: {
                    color: "gray",
                    paddingBottom: "0.5rem",
                  },
                }}
              />
              <IconButton
                disableFocusRipple={true}
                sx={{
                  position: "absolute",
                  right: "-0.7rem",
                  top: "0.7rem",
                  "&:hover": {
                    backgroundColor: "#146b7880",
                  },
                }}
                disableElevation
                type="submit"
                variant="text"
              >
                <EastIcon fontSize="medium" color="primary" />
              </IconButton>
            </form>
          </Box>
        </Container>
        <Typography
          sx={{
            maxWidth: "16.75rem",
            color: "secondary.light",
            mt: { xs: "5rem", lg: "5rem" },
          }}
        >
          <Box
            component="img"
            sx={{
              height: 18,
              marginRight: "0.1rem",
              verticalAlign: "-3px",
            }}
            alt="Logo"
            src={copyright}
          />
          2023 Ali alsyouf. all rights reserved.
        </Typography>
      </Container>
    </div>
  );
}
