import React from "react";
import { Paper, Typography, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import cella from "../../assets/cella.svg";
import { useContext } from "react";
import { StateContext } from "../../store/index";

export default function LatestResearch({ data }) {
  const [state] = useContext(StateContext);
  const host = process.env.REACT_APP_API_URL;
  return (
    <div className="latest-research">
      <Container disableGutters maxWidth="container">
        <Typography
          sx={{
            color: "primary.dark",
            mb: "22px",
            mt: "0",
            textAlign: "center",
          }}
          variant="h3"
          component="h2"
        >
          {data.research_title}
        </Typography>
        <Typography
          sx={{
            maxWidth: "690px",
            mx: "auto",
            mb: { xs: "10px", sm: "30px", md: "60px" },
            textAlign: "center",
          }}
          variant="subtitle1"
          color="secondary.dark"
        >
          {data.research_subtitle}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 3,
            position: "relative",
            flexWrap: "wrap",
            zIndex: "10",
          }}
        >
          {data.blogs.data.map((card) => (
            <Paper
              sx={{
                p: "0",
                width: { xs: 1, md: "31%" },
                maxWidth: "450px",
                mx: "auto",
                flex: "1 1 20rem",
                mt: "3rem",
                backgroundColor: "customColor.main",
              }}
              key={card.id}
              elevation={state.isDark ? 0 : 8}
            >
              <Box
                sx={{
                  m: 2.5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "89%",
                  flexGrow: "1",
                }}
              >
                <Box>
                  <Box
                    component="img"
                    src={host + card.attributes.main_image.data.attributes.url}
                    alt="thumbnail image"
                    className="research-card-image"
                  />
                  <Typography
                    sx={{ marginTop: "1rem", color: "primary.dark" }}
                    align="center"
                    variant="h5"
                  >
                    {card.attributes.headline}
                  </Typography>
                  <Typography
                    sx={{ my: "0.5rem" }}
                    color="secondary.dark"
                    align="center"
                    variant="body2"
                  >
                    {card.attributes.post_summary}
                  </Typography>
                </Box>
                <Link
                  to={`/blog/${card.id}`}
                  className="link"
                  style={{
                    display: "block",
                    marginTop: "1rem",
                    textDecoration: "none",
                    color: "#146B78",
                    fontWeight: "600",
                  }}
                >
                  Read More <img className="icon" src={arrow} alt="arrow" />
                </Link>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
      <Box
        component="img"
        sx={{
          height: { xs: "15rem", sm: "20rem", md: "25rem", lg: "30rem" },
          position: "absolute",
          bottom: "-1rem",
          left: "-5rem",
        }}
        alt="cell c"
        src={cella}
      />
    </div>
  );
}
