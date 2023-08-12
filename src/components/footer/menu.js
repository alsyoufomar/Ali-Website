import "../../styles/home.css";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const menu = [
  { name: "Home", route: "" },
  { name: "Blog", route: "blog" },
  { name: "About", route: "about" },
  { name: "Contact", route: "contact" },
];

export default function Menu() {
  return (
    <Box sx={{ mr: { xs: "4rem", lg: "0" } }}>
      <Typography
        variant="h6"
        component="h2"
        sx={{ marginBottom: "1.7rem", color: "#9AC9BC" }}
      >
        Menu
      </Typography>
      {menu.map((item, i) => (
        <RouterLink
          className="footerSectionItem"
          key={i}
          to={"/" + item.route}
          style={{
            display: "block",
            textDecoration: "none",
            marginBottom: "0.9rem",
          }}
        >
          {item.name}
        </RouterLink>
      ))}
    </Box>
  );
}
