import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import quote from "../../../assets/quote.svg";
import person from "../../../assets/person.jpg";
import "../../../styles/home.css";

export default function Testimonial(props) {
  return (
    <Paper
      sx={{
        height: "27rem",
        maxWidth: "47.3rem",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        mx: "auto",
        my: "2rem",
        p: "4.3rem",
      }}
      elevation={8}
    >
      <Box>
        <Box
          component="img"
          sx={{
            position: "absolute",
            height: "7rem",
            top: "-3rem",
            left: "3rem",
            zIndex: "10",
          }}
          alt="Logo"
          src={quote}
        />
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography
            sx={{
              lineHeight: "180%",
              color: "gray",
              fontWeight: "500",
              fontSize: "1.18rem",
              display: "flex",
              alignSelf: "center",
            }}
            maxWidth="31rem"
            variant="body1"
          >
            "{props.item.description}"
          </Typography>
          <Box sx={{ marginRight: "-7rem", marginLeft: "5rem" }}>
            <img className="image" src={person} alt="avatar" />
            <Typography
              sx={{
                my: "0.1rem",
                color: "primary.dark",
                textAlign: "center",
              }}
              variant="h5"
            >
              {props.item.name}
            </Typography>
            <Typography
              sx={{ fontWeight: "500", textAlign: "center" }}
              color="gray"
              variant="subtitle2"
            >
              {props.item.title}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
