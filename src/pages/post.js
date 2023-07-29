import React from "react";
import "../styles/blog.css";
import Appbar from "../components/appbarDark";
import Footer from "../components/footer";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { StateContext } from "../store/index";
import formattedDate from "../hooks/useFormattedDate";

export default function Post() {
  const { id } = useParams();
  const host = process.env.REACT_APP_API_URL;
  useFetch(
    `${host}/api/blogs/${id}?populate[main_image][fields][0]=url&populate[users_permissions_user][populate][1]=profile_pic`,
    "SET_BLOG"
  );
  const [state] = useContext(StateContext);

  if (!state.blog.data) return <></>;
  if (!state.blog.data.attributes) return <></>;
  if (!state.blog.data.attributes.blog_body) return <></>;
  const date = formattedDate(state.blog.data.attributes.publishedAt);

  return (
    <>
      <div className="post">
        <Box sx={{ px: { xs: "15px", sm: "30px", md: "60px" } }}>
          <Appbar />
        </Box>
        <Box sx={{ px: { xs: "15px", sm: "30px", md: "60px" } }}>
          <Box sx={{ maxWidth: "700px", mx: "auto" }}>
            <Typography
              sx={{
                color: "primary.dark",
                marginBottom: "30px",
                marginTop: { xs: "60px", md: "80px" },
              }}
              variant="h2"
              component="h1"
            >
              {state.blog.data.attributes.headline}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "0.8rem",
                alignItems: "center",
                mb: { xs: "40px", md: "60px" },
              }}
            >
              <Box
                component="img"
                alt="author image"
                src={
                  host +
                  state.blog.data.attributes.users_permissions_user.data
                    .attributes.profile_pic.data.attributes.url
                }
                className="post_author_image"
              />
              <Typography variant="caption" sx={{ fontSize: "0.9375rem" }}>
                {
                  state.blog.data.attributes.users_permissions_user.data
                    .attributes.name
                }
              </Typography>
              <Typography variant="caption" sx={{ fontSize: "0.9375rem" }}>
                .
              </Typography>
              <Typography variant="caption" sx={{ fontSize: "0.9375rem" }}>
                {date}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: { xs: "0", lg: "60px" } }}>
          <Box
            sx={{
              mx: "auto",
              maxWidth: { xs: "100%", lg: "900px" },
              height: { xs: "250px", md: "450px" },
            }}
          >
            <Box
              component="img"
              alt="cover image"
              src={
                host + state.blog.data.attributes.main_image.data.attributes.url
              }
              className="post_cover_image"
            />
          </Box>
        </Box>
        <Box sx={{ px: { xs: "15px", sm: "30px", md: "60px" } }}>
          <Box
            sx={{
              maxWidth: "700px",
              mx: "auto",
              mt: { xs: "40px", md: "60px" },
              mb: { xs: "40px", md: "60px" },
            }}
          >
            {/* safe default */}
            {/* <ReactMarkdown
              className="rich_text"
              children={state.blog.data.attributes.blog_body}
              rehypePlugins={[rehypeRaw]}
            /> */}

            {/* ckeditor */}
            <Typography
              dangerouslySetInnerHTML={{
                __html: state.blog.data.attributes.blog_body,
              }}
              className="rich_text"
              variant="body1"
              sx={{
                textAlign: "justify",
                fontSize: "1.1875rem",
                lineHeight: "160%",
                fontWeight: "500",
              }}
            >
              {/* <del>this is a strick through</del> */}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                marginTop: { xs: "60px", md: "120px" },
              }}
            >
              <Box
                component="img"
                alt="author image"
                flexShrink="0"
                src={
                  host +
                  state.blog.data.attributes.users_permissions_user.data
                    .attributes.profile_pic.data.attributes.url
                }
                className="bottom_author_image"
              />
              <Box>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "1rem",
                    fontWeight: "500",
                    letterSpacing: "0.1rem",
                    color: "#BBC8D4",
                  }}
                >
                  Written by
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "400",
                    color: "primary.dark",
                  }}
                >
                  {
                    state.blog.data.attributes.users_permissions_user.data
                      .attributes.name
                  }
                </Typography>
                <Box sx={{ maxWidth: "25rem" }}>
                  <Typography variant="caption" lineHeight="133%">
                    {
                      state.blog.data.attributes.users_permissions_user.data
                        .attributes.user_summary
                    }
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "rgba(109, 125, 139, 0.4)",
                mt: "60px",
                mb: "60px",
              }}
            ></Box>
          </Box>
        </Box>
      </div>
      <Footer />
    </>
  );
}
