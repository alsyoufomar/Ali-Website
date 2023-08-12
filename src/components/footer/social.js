import { Typography, Box, Link } from "@mui/material";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

export default function Social({ props }) {
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
        variant="h6"
        component="h3"
        sx={{ marginBottom: "1.7rem", color: "#9AC9BC" }}
      >
        Social
      </Typography>
      {social.map((item, i) => (
        <Link
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener"
          sx={{
            display: "block",
            marginBottom: "0.9rem",
            color: "secondary.light",
            textDecoration: "none",
            "&:hover": {
              color: "#146B78",
            },
          }}
        >
          <img
            height="15"
            width="auto"
            alt="social icon"
            title="social icon"
            loading="lazy"
            src={item.image}
            style={{
              marginRight: "0.5rem",
              verticalAlign: "-2px",
              fill: "#146B78",
            }}
          />
          {item.name}
        </Link>
      ))}
    </Box>
  );
}
