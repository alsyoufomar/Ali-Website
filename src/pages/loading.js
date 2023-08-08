import React from "react";
import { CircularProgress, Box } from "@mui/material";

export default function Loading() {
  React.useEffect(() => {
    document.title = "Ali Alsyouf";
  }, []);
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
      <CircularProgress />
    </Box>
  );
}
