import React from "react";
import "../styles/blog.css";
import Appbar from "../components/appbarDark";
import Footer from "../components/footer/footer";
import { Typography, Container, Box, Pagination } from "@mui/material";
import BlogCards from "../components/Blog/blogCard";
import celle from "../assets/celle.svg";
import useFetch from "../hooks/useFetch";
import { useContext, useState, useEffect } from "react";
import { StateContext } from "../store/index";
import Loading from "./loading";
import ReqError from "./error";
import { useNavigate, useLocation } from "react-router-dom";

export default function Blog() {
  const location = useLocation();
  const navigate = useNavigate();
  const host = process.env.REACT_APP_API_URL;
  const [page, setPage] = useState(() => {
    const query = new URLSearchParams(location.search);
    return parseInt(query.get("page")) || 1;
  });
  const [state] = useContext(StateContext);

  useEffect(() => {
    const query = new URLSearchParams();
    query.set("page", page);
    navigate({ search: query.toString() }, { replace: true });
  }, [state.blogs, navigate, page]);

  const { loading, error } = useFetch(
    `${host}/api/blog-static`,
    "SET_BLOG_STATIC"
  );
  useFetch(
    `${host}/api/blogs?fields[0]=headline&fields[1]=post_summary&fields[2]=publishedAt&populate[main_image][fields][0]=url&populate[users_permissions_user][populate][1]=profile_pic&pagination[page]=${page}&pagination[pageSize]=9&sort=publishedAt:desc`,
    "SET_BLOGS"
  );

  if (loading) return <Loading />;
  if (error) return <ReqError props={error} />;
  if (!state.blogs.data) return <></>;
  if (!state.blog_static.data) return <></>;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

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
              color: "secondary.dark",
              marginBottom: "3rem",
            }}
          >
            {state.blog_static.data.attributes.blog_subtitle}
          </Typography>
          <BlogCards props={state} />
          {state.blogs.meta.pagination.pageCount > 1 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Pagination
                sx={{
                  zIndex: "10000",
                  "& .MuiPaginationItem-root": {
                    color: "primary.dark",
                  },
                  "& .MuiPaginationItem-root.Mui-selected": {
                    color: "#fff",
                  },
                }}
                count={state.blogs.meta.pagination.pageCount}
                color="primary"
                page={page}
                onChange={handlePageChange}
              />
            </Box>
          )}
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
