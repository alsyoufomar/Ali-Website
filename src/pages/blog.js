import React from "react";
import "../styles/blog.css";
import Appbar from "../components/appbarDark";
import Footer from "../components/footer/footer";
import { Typography, Container, Button, Box, Pagination } from "@mui/material";
import Blogcard from "../components/Blog/blogCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { grey } from "@mui/material/colors";
import celle from "../assets/celle.svg";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { StateContext } from "../store/index";
import Loading from "./loading";
import ReqError from "./error";

export default function Blog() {
  const host = process.env.REACT_APP_API_URL;
  const { loading, error } = useFetch(
    `${host}/api/blog-static`,
    "SET_BLOG_STATIC"
  );
  useFetch(
    `${host}/api/blogs?fields[0]=headline&fields[1]=post_summary&fields[2]=publishedAt&populate[main_image][fields][0]=url&populate[users_permissions_user][populate][1]=profile_pic&pagination[page]=1&pagination[pageSize]=9`,
    "SET_BLOGS"
  );

  const [state] = useContext(StateContext);
  if (loading) return <Loading />;
  if (error) return <ReqError props={error} />;
  if (!state.blogs.data) return <></>;
  if (!state.blog_static.data) return <></>;

  console.log(state.blogs.meta.pagination);
  return (
    <>
      <div className="blog">
        <Appbar />
        <Container sx={{ zIndex: "1000" }} disableGutters maxWidth="container">
          <Typography
            sx={{
              color: "primary.dark",
              marginBottom: "25px",
              marginTop: { xs: "60px", md: "135px" },
            }}
            variant="h2"
            component="h1"
          >
            {state.blog_static.data.attributes.blog_title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "gray",
              marginBottom: "3rem",
            }}
          >
            {state.blog_static.data.attributes.blog_subtitle}
          </Typography>
          <Blogcard props={state} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <Button
              endIcon={<ExpandMoreIcon />}
              disableElevation
              variant="contained"
              sx={{
                zIndex: "1000",
                backgroundColor: grey[400],
                color: "primary.dark",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
                px: "22px",
                py: "10px",
                lineHeight: "20px",
                fontWeight: "600",
                fontFamily: "poppins",
                // backgroundColor: "grey",
                // color: "primary.dark",
              }}
            >
              Expand
            </Button> */}
            <Pagination
              sx={{ zIndex: "10000" }}
              count={state.blogs.meta.pagination.pageCount}
              color="primary"
            />
          </Box>
        </Container>
        <Box
          component="img"
          sx={{
            height: { xs: "12rem", sm: "15rem", md: "20rem", lg: "25rem" },
            position: "absolute",
            bottom: "-3rem",
            right: "-5rem",
          }}
          alt="cell e"
          src={celle}
        />
      </div>
      <Footer />
    </>
  );
}
