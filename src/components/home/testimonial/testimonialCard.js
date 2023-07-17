import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import quote from "../../../assets/quote.svg";
import person from "../../../assets/person.jpg";
import "../../../styles/home.css";

export default function Testimonial(props) {
  return (
    <Box sx={{ pr: { xs: "2px", md: "3.5rem" }, pl: "2px" }}>
      <Paper
        sx={{
          minHeight: "20rem",
          maxWidth: "40.3rem",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mx: "auto",
          my: "2rem",

          p: { xs: "1.5rem", sm: "3rem", lg: "4rem" },
        }}
      >
        <Box>
          <Box
            component="img"
            sx={{
              position: "absolute",
              height: { xs: "4rem", sm: "5.5rem", lg: "7rem" },
              top: { xs: "-1.7rem", sm: "-2.3rem", lg: "-3rem" },
              left: "3rem",
              zIndex: "10",
            }}
            alt="Logo"
            src={quote}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "start",
              minHeight: "17rem",
            }}
          >
            <Typography
              sx={{
                lineHeight: "150%",
                color: "gray",
                fontWeight: "500",
                fontSize: { xs: "17px", sm: "1.18rem" },
                display: "flex",
                alignSelf: "start",
                mt: { xs: "0", md: "2rem" },
              }}
              maxWidth="31rem"
              variant="body1"
            >
              "{props.item.description}"
            </Typography>
            <Box
              sx={{
                mr: { xs: "auto", md: "-7rem" },
                ml: { xs: "0", md: "5rem" },
                mt: { xs: "2rem", md: "0" },
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="author image"
                src={person}
                className="image"
              />
              <Box>
                <Typography
                  sx={{
                    my: "0.1rem",
                    color: "primary.dark",
                    textAlign: { xs: "start", md: "center" },
                  }}
                  variant="h5"
                >
                  {props.item.name}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    textAlign: { xs: "start", md: "center" },
                  }}
                  color="gray"
                  variant="subtitle2"
                >
                  {props.item.title}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
