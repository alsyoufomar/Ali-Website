import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/ali.svg";
import { Typography, Box, Link } from "@mui/material";

export default function Info({ props }) {
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
        sx={{
          color: "secondary.light",
          textDecoration: "none",
          "&:hover": {
            color: "#146B78",
          },
        }}
        href={`mailto:${props.email}?subject=Mail from My Site`}
      >
        {props.email}
      </Link>
      <Link
        sx={{
          color: "secondary.light",
          textDecoration: "none",
          "&:hover": {
            color: "#146B78",
          },
          marginTop: "0.3rem",
        }}
        href={`tel:${props.phone}`}
      >
        {props.phone}
      </Link>
    </Box>
  );
}
