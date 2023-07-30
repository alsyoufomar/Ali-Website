import { Typography, Box, Link } from "@mui/material";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import { makeStyles } from "@mui/styles";

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

export default function Social({ props }) {
  const classes = useStyles();

  const social = [
    {
      name: "Facebook",
      link: props.facebook_link,
      image: facebook,
    },
    {
      name: "Instagram",
      link: props.instagram_link,
      image: instagram,
    },
    {
      name: "Twitter",
      link: props.twitter_link,
      image: twitter,
    },
  ];

  return (
    <Box sx={{ mr: { xs: "auto", lg: "0" } }}>
      <Typography
        className={classes.footerSectionTitle}
        variant="h6"
        sx={{ marginBottom: "1.7rem" }}
      >
        Social
      </Typography>
      {social.map((item, i) => (
        <Link
          className={classes.footerSectionItem}
          key={i}
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
              fill: "#146B78",
            }}
            alt="Logo"
            src={item.image}
          />
          {item.name}
        </Link>
      ))}
    </Box>
  );
}
