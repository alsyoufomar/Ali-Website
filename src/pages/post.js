import React from "react";
import "../styles/blog.css";
import cover from "../assets/post-cover.jpeg";
import Appbar from "../components/appbarDark";
import Footer from "../components/footer";
import { Typography, Box } from "@mui/material";
import person from "../assets/person.jpg";

export default function post() {
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
              What Ever Happened to Steampunk?
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
                src={person}
                className="post_author_image"
              />
              <Typography variant="caption" sx={{ fontSize: "0.9375rem" }}>
                John Wallas
              </Typography>
              <Typography variant="caption" sx={{ fontSize: "0.9375rem" }}>
                .
              </Typography>
              <Typography variant="caption" sx={{ fontSize: "0.9375rem" }}>
                Feb 10, 2020
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
              src={cover}
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
            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                fontSize: "1.1875rem",
                lineHeight: "160%",
                fontWeight: "500",
              }}
            >
              React Server Components provides the developers the ability to tap
              into the server infrastructure. Before the introduction of Server
              Components, React was capable of only client-side rendering. With
              the introduction of the new Server Components, large dependencies
              can remain entirely on the server, resulting in a performance
              boost. The client-side JavaScript bundle size is reduced when
              large dependencies are kept on the server. You can still leverage
              Client Components, whenever there is new user interactivity. But
              other than that the client-side run time JavaScript bundle size is
              minimal. This is a huge win for the React ecosystem, and has been
              adopted already by Next.js 13. You only need to mark components as
              ‘use client’ when they use client hooks such as useState or
              useEffect. It’s best to leave components that do not depend on
              client hooks without the directive so that they can automatically
              be rendered as a Server Component when they aren’t imported by
              another Client Component. This helps ensure the smallest amount of
              client-side JavaScript. React Server Components provides the
              developers the ability to tap into the server infrastructure.
              Before the introduction of Server Components, React was capable of
              only client-side rendering. With the introduction of the new
              Server Components, large dependencies can remain entirely on the
              server, resulting in a performance boost. The client-side
              JavaScript bundle size is reduced when large dependencies are kept
              on the server. You can still leverage Client Components, whenever
              there is new user interactivity. But other than that the
              client-side run time JavaScript bundle size is minimal. This is a
              huge win for the React ecosystem, and has been adopted already by
              Next.js 13. You only need to mark components as ‘use client’ when
              they use client hooks such as useState or useEffect. It’s best to
              leave components that do not depend on client hooks without the
              directive so that they can automatically be rendered as a Server
              Component when they aren’t imported by another Client Component.
              This helps ensure the smallest amount of client-side JavaScript.
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
                src={person}
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
                  John Wallas
                </Typography>
                <Box sx={{ maxWidth: "25rem" }}>
                  <Typography variant="caption" lineHeight="133%">
                    CEO at teams. Author of upcoming book on team management and
                    Leadership
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
