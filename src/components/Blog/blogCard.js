import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import person from "../../assets/person.jpg";
import "../../styles/blog.css";

const list = [
  {
    image: person,
    title: "What Ever Happened to Steampunk?",
    body: "How the iPhone popularized steampunk… and how the iPhone killed it off",
    name: "John Wallas",
    date: "Feb 10, 2020",
    author: person,
  },
  {
    image: person,
    title:
      "This Is Hardcore—The Huge Impact of a Niche Movement on Graphic Designers Today",
    body: "You might not know the music, but designers have certainly taken notice of this small but visceral movement from the late ’80s",
    name: "Darrell Steward",
    date: "Dec 10, 2020",
    author: person,
  },
  {
    image: person,
    title: "Data-Driven Design is Killing Our Instincts",
    body: "Valuing data over design instinct puts metrics over users",
    name: "Wade Warren",
    date: "Dec 11, 2022",
    author: person,
  },
  {
    image: person,
    title:
      "Dear Designer: How to Explain to Your Kids That You Work at Facebook",
    body: "If your work helps spread lies and re-elect racists, your kids might want some answers",
    name: "JSavannah Nguyen",
    date: "Jun 2, 2020",
    author: person,
  },
  {
    image: person,
    title: "Why Are Women Still Behind in the Design World?",
    body: "It’s 2020, but women designers still face lower pay and less opportunity. What gives?",
    name: "Leslie Alexander",
    date: "Aug 12, 2020",
    author: person,
  },
  {
    image: person,
    title: "Finding the Blank Spots in Big Data",
    body: "Artists and designers are working to address a major problem for marginalized communities in the data economy: ‘If the data does not exist…",
    name: "Devon Lane",
    date: "Nov 1, 2020",
    author: person,
  },
  {
    image: person,
    title: "The Emotional Toll of Being in UX",
    body: "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand.",
    name: "Floyd Miles",
    date: "Dec 7, 2018",
    author: person,
  },
];

export default function BlogCard() {
  return (
    <div className="blog-card">
      <Box sx={{ marginBottom: "4.12rem", flexGrow: 1 }}>
        <Grid container spacing={2}>
          {list.map((item, i) => (
            <Grid key={i} xs={12} sm={6} md={4} component="div">
              <Link to="/blog/:id" style={{ textDecoration: "none" }}>
                <Paper
                  sx={{ paddingBottom: "1px", height: "100%" }}
                  elevation={8}
                >
                  <Box
                    component="img"
                    alt="thumbnail image"
                    src={person}
                    className="image"
                  />
                  <Box sx={{ m: 3 }}>
                    <Box>
                      <Typography sx={{ my: 0 }} variant="h5" component="h4">
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{ my: "0.88rem", marginBottom: "3rem" }}
                        color="gray"
                        variant="body2"
                        className="summary"
                      >
                        {item.body}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "0.6rem",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="img"
                        alt="author image"
                        src={person}
                        className="author_image"
                      />
                      <Typography variant="caption">{item.name}</Typography>
                      <Typography variant="caption">.</Typography>
                      <Typography variant="caption">{item.date}</Typography>
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
