import React from "react";
import { Paper, Typography, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import img1 from "../../assets/research1.jpg";
import img2 from "../../assets/research2.jpg";
import img3 from "../../assets/research3.jpg";
import arrow from "../../assets/arrow.svg";

const serviceList = [
  {
    title: "Latest Virus research",
    body: "Core reagents for virus vaccines, diagnostic and drug R&D, Antigens/Antibodies/ELISA kits.",
    img: img1,
  },
  {
    title: "Vaccine research",
    body: "Core reagents for virus vaccines, diagnostic and drug R&D, Antigens/Antibodies/ELISA kits.",
    img: img2,
  },
  {
    title: "Development of medicine",
    body: "Core reagents for virus vaccines, diagnostic and drug R&D, Antigens/Antibodies/ELISA kits.",
    img: img3,
  },
];

export default function LatestResearch() {
  return (
    <div className="latest-research">
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "primary.dark",
            marginBottom: "22px",
            marginTop: "0",
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
            marginBottom: "93px",
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
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 4,
            position: "relative",
            zIndex: "10",
          }}
        >
          {serviceList.map((card) => (
            <Paper elevation={8}>
              <Box sx={{ m: 3 }}>
                <Box
                  sx={{ width: "100%", marginTop: "-3rem" }}
                  component="img"
                  alt="Logo"
                  src={card.img}
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
                  color="gray"
                  align="center"
                  variant="body2"
                >
                  {card.body}
                </Typography>
                <Link
                  align="center"
                  style={{
                    display: "block",
                    marginTop: "2rem",
                    marginBottom: "2rem",
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
    </div>
  );
}
