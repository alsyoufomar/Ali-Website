import React from "react";
import { Paper, Typography, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import img1 from "../../assets/research1.jpg";
import img2 from "../../assets/research2.jpg";
import img3 from "../../assets/research3.jpg";
import arrow from "../../assets/arrow.svg";
import cella from "../../assets/cella.svg";

const serviceList = [
  {
    title: "Latest Virus research",
    body: "Core reagents for virus vaccines, diagnostic ",
    img: img1,
  },
  {
    title: "Vaccine research",
    body: "Core reagents for virus vaccines, diagnostic and drug R&D, Antigens/ Antibodies/ ELISA kits.",
    img: img2,
  },
  {
    title: "Development of medicine",
    body: "Core reagents for virus vaccines, diagnostic and drug R&D, Antigens/ Antibodies/ ELISA kits. gjkhk hjg fewf wqef iuuujhjj",
    img: img3,
  },
];

export default function LatestResearch() {
  return (
    <div className="latest-research">
      <Container maxWidth="container">
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
          my latest research
        </Typography>
        <Typography
          sx={{
            maxWidth: "690px",
            mx: "auto",
            mb: { xs: "10px", sm: "30px", md: "60px" },
            textAlign: "center",
          }}
          variant="subtitle1"
          color="gray"
        >
          Unveiling New Horizons: Discover the Latest Breakthroughs and Valuable
          Insights from My Recent Research Endeavors in [Research Area].
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
          {serviceList.map((card, i) => (
            <Paper
              sx={{
                p: "0",
                width: { xs: 1, md: "31%" },
                maxWidth: "450px",
                mx: "auto",
                flex: "1 1 20rem",
                mt: "3rem",
              }}
              key={i}
              elevation={8}
            >
              <Box
                sx={{
                  m: 2.5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "87%",
                  flexGrow: "1",
                }}
              >
                <Box>
                  <Box
                    component="img"
                    src={card.img}
                    alt="thumbnail image"
                    className="research-card-image"
                  />
                  <Typography
                    sx={{ marginTop: "1rem" }}
                    align="center"
                    variant="h5"
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{ my: "0.5rem" }}
                    color="grey"
                    align="center"
                    variant="body2"
                  >
                    {card.body}
                  </Typography>
                </Box>
                <Link
                  align="center"
                  style={{
                    display: "block",
                    marginTop: "1rem",
                    // marginBottom: "2rem",
                    textDecoration: "none",
                    color: "#146B78",
                    fontWeight: "500",
                  }}
                >
                  Read More <img src={arrow} alt="arrow" />
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
