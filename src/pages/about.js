import React from "react";
import "../styles/about.css";
import Appbar from "../components/appbarDark";
import Footer from "../components/footer/footer";
import { Typography, Box, Container } from "@mui/material";
import celle from "../assets/celle.svg";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { StateContext } from "../store/index";
import Loading from "./loading";
import ReqError from "./error";
import { Helmet } from "react-helmet-async";

export default function About() {
  const host = process.env.REACT_APP_API_URL;

  const { loading, error } = useFetch(
    `${host}/api/about?populate=*`,
    "SET_ABOUT"
  );
  const [state] = useContext(StateContext);
  if (loading) return <Loading />;
  if (error) return <ReqError props={error} />;
  if (!state.about.data) return <></>;

  return (
    <>
      <div className="about">
        <Helmet>
          <title>About me - Ali Alsyouf</title>
          <meta
            name="description"
            content="At RSS's R&D Lab, I enhanced MOF-801's yield from 80% to 95% and optimized its reuse. Also worked with MIL-101(Cr) & more."
          />
          <link rel="canonical" href="/contact" />
        </Helmet>
        <Appbar />
        <Container disableGutters maxWidth="container" sx={{ height: "100%" }}>
          <Typography
            sx={{
              color: "primary.dark",
              marginBottom: "35px",
              marginTop: { xs: "60px", md: "135px" },
            }}
            variant="h2"
            component="h1"
          >
            {state.about.data.attributes.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "start" },
              justifyContent: "space-between",
              gap: { xs: "3rem", lg: "4rem" },
            }}
          >
            <Box>
              <Typography
                variant="body1"
                className="rich_text"
                sx={{
                  color: "customColor.bodyText",
                  textAlign: "justify",
                  fontSize: "1.1875rem",
                  lineHeight: "145%",
                  fontWeight: "500",
                  maxWidth: { xs: "100%", md: "30.9375rem" },
                  minWidth: { xs: "35vw", lg: "25rem" },
                }}
                dangerouslySetInnerHTML={{
                  __html: state.about.data.attributes.body,
                }}
              />
            </Box>
            <Box
              sx={{
                mt: "10px",
                px: "1rem",
                maxHeight: "700px",
                zIndex: "1000",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "customColor.personalImgBg",
                  py: "2rem",
                  borderRadius: { xs: "0.5rem", sm: "0.7rem", md: "1rem" },
                }}
              >
                <Box
                  sx={{
                    maxWidth: "100%",
                    maxHeight: { xs: "500px", md: "700px" },
                    objectFit: "cover",
                    objectPosition: "center 50%",
                    ml: "10%",
                    borderRadius: { xs: "0.5rem", sm: "0.7rem", md: "1rem" },
                  }}
                  component="img"
                  alt="Ali's image"
                  title="personal picture"
                  loading="eager"
                  src={
                    state.about.data.attributes.personal_pic.data.attributes.url
                  }
                />
              </Box>
            </Box>
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
          alt="background image"
          title="cell e"
          loading="eager"
          src={celle}
        />
      </div>
      <Footer />
    </>
  );
}
