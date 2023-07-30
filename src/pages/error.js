import React from "react";
import { Box, Typography } from "@mui/material";

export default function ReqError({ props }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#2d303b",
      }}
    >
      <Typography variant="h2" sx={{ color: "primary.main" }}>
        Error :( <br /> {props.error}
      </Typography>
    </Box>
  );
}
