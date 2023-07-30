import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../../styles/blog.css";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { StateContext } from "../../store/index";
import formattedDate from "../../hooks/useFormattedDate";

export default function BlogCard({ props }) {
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
                  }}
                  elevation={12}
                >
                  <Box
                    component="img"
                    alt="thumbnail image"
                    src={host + item.attributes.main_image.data.attributes.url}
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
                      <Typography sx={{ my: 0 }} variant="h5" component="h4">
                        {item.attributes.headline}
                      </Typography>
                      <Typography
                        sx={{ my: "0.88rem", marginBottom: "3rem" }}
                        color="gray"
                        variant="body2"
                        className="summary"
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
                          host +
                          item.attributes.users_permissions_user.data.attributes
                            .profile_pic.data.attributes.url
                        }
                        className="author_image"
                        sx={{ flexShrink: "0" }}
                      />
                      <Typography variant="caption">
                        {
                          item.attributes.users_permissions_user.data.attributes
                            .name
                        }
                      </Typography>
                      <Typography variant="caption">.</Typography>
                      <Typography variant="caption">
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
