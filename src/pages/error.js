import React from "react";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Error :(</title>
      </Helmet>
      <Typography variant="h2" sx={{ color: "primary.main" }}>
        Error :( <br /> {props.error}
      </Typography>
    </Box>
  );
}
