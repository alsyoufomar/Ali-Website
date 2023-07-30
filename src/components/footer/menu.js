import "../../styles/home.css";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const menu = [
  { name: "Home", route: "" },
  { name: "Blog", route: "blog" },
  { name: "About", route: "about" },
  { name: "Contact", route: "contact" },
];

const useStyles = makeStyles((theme) => ({
  footerSectionTitle: {
    color: "#9AC9BC",
  },
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

export default function Menu() {
  const classes = useStyles();

  return (
    <Box sx={{ mr: { xs: "4rem", lg: "0" } }}>
      <Typography
        className={classes.footerSectionTitle}
        variant="h6"
        sx={{ marginBottom: "1.7rem" }}
      >
        Menu
      </Typography>
      {menu.map((item, i) => (
        <RouterLink
          className={classes.footerSectionItem}
          key={i}
          to={"/" + item.route}
          style={{
            display: "block",
            textDecoration: "none",
            marginBottom: "0.9rem",
            // color: "rgba(140, 166, 158, 0.73)",
          }}
        >
          {item.name}
        </RouterLink>
      ))}
    </Box>
  );
}
