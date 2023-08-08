import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import quote from "../../../assets/quote.svg";
import "../../../styles/home.css";
import { useContext } from "react";
import { StateContext } from "../../../store/index";

export default function TestimonialCard(props) {
  const [state] = useContext(StateContext);

  return (
    <Box sx={{ pr: { xs: "2px", md: "3.5rem" }, pl: "2px" }}>
      <Paper
        elevation={state.isDark ? 0 : 8}
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
          backgroundColor: "customColor.main",
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
                color: "secondary.dark",
                fontWeight: "500",
                fontSize: { xs: "17px", sm: "1.18rem" },
                display: "flex",
                alignSelf: "start",
                mt: { xs: "0", md: "2rem" },
              }}
              maxWidth="31rem"
              variant="body1"
            >
              "{props.item.attributes.testimonial_body}"
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
                src={
                  props.item.attributes.users_permissions_user.data.attributes
                    .profile_pic.data.attributes.url
                }
                className="test-image"
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
                  {
                    props.item.attributes.users_permissions_user.data.attributes
                      .name
                  }
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    textAlign: { xs: "start", md: "center" },
                    color: "secondary.dark",
                  }}
                  variant="subtitle2"
                >
                  {
                    props.item.attributes.users_permissions_user.data.attributes
                      .short_summary
                  }
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
