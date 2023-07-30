import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/ali.svg";
import { Typography, Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footerSectionItem: {
    color: "rgba(140, 166, 158, 0.73)",
    transition: theme.transitions.create("color", {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeIn,
    }),
    "&:hover": {
      color: "#146B78",
    },
  },
}));

export default function Info({ props }) {
  const classes = useStyles();
  return (
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
        {props.title}
      </Typography>
      <Link
        className={classes.footerSectionItem}
        sx={{ color: "secondary.light", textDecoration: "none" }}
        href={`mailto:${props.email}?subject=Mail from My Site`}
      >
        {props.email}
      </Link>
      <Link
        className={classes.footerSectionItem}
        sx={{
          color: "secondary.light",
          textDecoration: "none",
          marginTop: "0.3rem",
        }}
        href={`tel:${props.phone}`}
      >
        {props.phone}
      </Link>
    </Box>
  );
}
