import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../../styles/blog.css";
import formattedDate from "../../hooks/useFormattedDate";
import { useContext } from "react";
import { StateContext } from "../../store/index";

export default function BlogCards({ props }) {
  const [state] = useContext(StateContext);
  const host = process.env.REACT_APP_API_URL;

  return (
    <div className="blog-card">
      <Box
        sx={{
          mb: "4.12rem",
          mt: { xs: "70px", md: "6rem" },
          flexGrow: 1,
        }}
      >
        <Grid
          container
          rowSpacing={6}
          columnSpacing={3}
          justifyContent="center"
          maxWidth="auto"
          className="MuiGrid-root"
        >
          {props.blogs.data.map((item) => (
            <Grid
              sx={{ zIndex: "1000" }}
              item
              key={item.id}
              xs={12}
              sm={10}
              md={6}
              lg={4}
              component="div"
            >
              <Link className="card" to={`/blog/${item.id}`}>
                <Paper
                  sx={{
                    padding: "0",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: "1",
                    backgroundColor: "customColor.main",
                  }}
                  elevation={state.isDark ? 0 : 8}
                >
                  <Box
                    component="img"
                    alt="thumbnail image"
                    src={item.attributes.main_image.data.attributes.url}
                    className="card-image"
                  />
                  <Box
                    sx={{
                      m: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      flexGrow: "1",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{ my: 0, color: "primary.dark" }}
                        variant="h5"
                        component="h4"
                      >
                        {item.attributes.headline}
                      </Typography>
                      <Typography
                        sx={{
                          my: "0.88rem",
                          marginBottom: "3rem",
                          color: "secondary.dark",
                        }}
                        variant="body2"
                        className="summary"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.attributes.post_summary}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "0.6rem",
                        alignItems: "center",
                        justifyContent: "start",
                      }}
                    >
                      <Box
                        component="img"
                        alt="author image"
                        src={
                          item.attributes.users_permissions_user.data.attributes
                            .profile_pic.data.attributes.url
                        }
                        className="author_image"
                        sx={{ flexShrink: "0" }}
                      />
                      <Typography color="secondary.dark" variant="caption">
                        {
                          item.attributes.users_permissions_user.data.attributes
                            .name
                        }
                      </Typography>
                      <Typography color="secondary.dark" variant="caption">
                        .
                      </Typography>
                      <Typography color="secondary.dark" variant="caption">
                        {formattedDate(item.attributes.publishedAt)}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
