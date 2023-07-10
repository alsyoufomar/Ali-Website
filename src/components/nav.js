import React from "react";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";

export default function nav() {
  return (
    <div className="nav">
      <br />
      <Typography variant="h1" gutterBottom color="textPrimary" align="center">
        This is the first typography
      </Typography>
      <Typography color="textSecondary" noWrap align="center">
        This is the first typography
      </Typography>
    </div>
  );
}
