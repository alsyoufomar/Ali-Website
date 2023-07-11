import React from "react";
import Container from "@mui/material/Container";
import Appbar from "../components/appbar";
import "../styles/home.css";
import { Paper, Typography, TextField } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import celld from "../assets/celld2.svg";
import img1 from "../assets/research1.jpg";
import img2 from "../assets/research2.jpg";
import img3 from "../assets/research3.jpg";
import person from "../assets/person.jpg";
import arrow from "../assets/arrow.svg";
import cellc from "../assets/cellc.svg";
import quote from "../assets/quote.svg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles({
  innerContainer: {
    maxWidth: "1160px",
    marginLeft: "auto",
    marginRight: "auto",
    height: "20rem",
  },
});

const serviceList = [
  {
    title: "Latest Virus research",
    body: "Core reagents for virus vaccines, diagnostic and drug R&D, Antigens/Antibodies/ELISA kits.",
    img: img1,
  },
  {
    title: "Vaccine research",
    body: "Core reagents for virus vaccines, diagnostic and drug R&D, Antigens/Antibodies/ELISA kits.",
    img: img2,
  },
  {
    title: "Development of medicine",
    body: "Core reagents for virus vaccines, diagnostic and drug R&D, Antigens/Antibodies/ELISA kits.",
    img: img3,
  },
];

var items = [
  {
    name: "Floyd Miles",
    title: "CEO at Google",
    description:
      "Ali is a dedicated chemist from Amman, with a strong passion for molecules and chemical reactions that has led him to establish a notable presence in the scientific community.",
  },
  {
    name: "Robert Fox",
    title: "CEO at Coca-Cola",
    description:
      "Ali is a dedicated chemist from Amman, with a strong passion for molecules and chemical reactions that has led him to establish a notable presence in the scientific community.",
  },
  {
    name: "Guy Hawkins",
    title: "CEO at Pepsi",
    description:
      "Ali is a dedicated chemist from Amman, with a strong passion for molecules and chemical reactions that has led him to establish a notable presence in the scientific community.",
  },
];

export default function Home() {
  console.log("home rendered");

  const classes = useStyles();

  return (
    <div className="home">
      <div className="hero">
        <Appbar />
        <Toolbar className={classes.innerContainer}>
          <Box sx={{ maxWidth: "33.25rem" }}>
            <Typography
              sx={{
                color: "secondary.main",
                marginBottom: "35px",
                marginTop: "20rem",
              }}
              variant="h2"
              component="h1"
            >
              Hello, My Name Is Ali
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "secondary.light",
                maxWidth: "30rem",
                marginBottom: "3.5rem",
              }}
            >
              Exploring the Fascinating World of Chemistry Welcome to My Journey
              Through <br /> Molecules and Reactions
            </Typography>
            <Link
              style={{
                display: "inline-block",
                textDecoration: "none",
              }}
              to="/contact"
            >
              <Button
                // onClick={handleCloseNavMenu}
                variant="contained"
                disableElevation
                style={{ borderRadius: 50 }}
                sx={{
                  // my: 4,
                  px: "2.3rem",
                  py: "1rem",
                  color: "primary.light",
                  display: "block",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#146b7880",
                  },
                }}
              >
                Get in touch
              </Button>
            </Link>
          </Box>
          <Box
            component="img"
            sx={{
              height: "40rem",
              marginLeft: "3rem",
              marginTop: "50rem",
              marginRight: "-100rem",
            }}
            alt="Logo"
            src={celld}
          />
        </Toolbar>
      </div>
      <div className="latest-research">
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "primary.dark",
              marginBottom: "22px",
              marginTop: "0",
              textAlign: "center",
            }}
            variant="h3"
            component="h2"
          >
            my latest research
          </Typography>
          <Typography
            sx={{
              maxWidth: "690px",
              mx: "auto",
              marginBottom: "93px",
              textAlign: "center",
            }}
            variant="subtitle1"
            color="gray"
          >
            Unveiling New Horizons: Discover the Latest Breakthroughs and
            Valuable Insights from My Recent Research Endeavors in
            [Research Area].
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 4,
              position: "relative",
              zIndex: "10",
            }}
          >
            {serviceList.map((card) => (
              <Paper elevation={8}>
                <Box sx={{ m: 3 }}>
                  <Box
                    sx={{ width: "100%", marginTop: "-3rem" }}
                    component="img"
                    alt="Logo"
                    src={card.img}
                  />
                  <Typography
                    sx={{ marginTop: "1rem" }}
                    align="center"
                    variant="h5"
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{ my: "0.5rem" }}
                    color="gray"
                    align="center"
                    variant="body2"
                  >
                    {card.body}
                  </Typography>
                  <Link
                    align="center"
                    style={{
                      display: "block",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                      textDecoration: "none",
                      color: "#146B78",
                      fontWeight: "500",
                    }}
                  >
                    Read More <img src={arrow} alt="arrow" />
                  </Link>
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </div>
      <div className="subscribe-cta">
        <Container maxWidth="lg">
          <Box
            component="img"
            sx={{
              height: "40rem",
              marginLeft: "-20rem",
              marginTop: "-24rem",
              marginBottom: "-15rem",
            }}
            alt="Logo"
            src={cellc}
          />
          <Typography
            sx={{
              color: "primary.dark",
              marginBottom: "22px",
              marginTop: "0",
              textAlign: "center",
            }}
            variant="h3"
            component="h2"
          >
            Subscribe to My Blog
          </Typography>
          <Typography
            sx={{
              maxWidth: "690px",
              mx: "auto",
              marginBottom: "93px",
              textAlign: "center",
            }}
            variant="subtitle1"
            color="gray"
          >
            Stay Informed and Inspired: Receive Exclusive Updates, Expert
            Insights, and Engaging Content by Subscribing to My Blog.
          </Typography>
          <Box align="center">
            <form
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
              noValidate
              autoComplete="false"
            >
              <TextField
                required="true"
                size="normal"
                variant="standard"
                label="Email"
                sx={{
                  width: "20rem",
                }}
              />
              <Button
                sx={{
                  marginLeft: "1rem",
                  px: "2.7rem",
                  py: "0.6rem",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#146b7880",
                  },
                }}
                disableElevation
                type="submit"
                variant="contained"
              >
                Subscribe
              </Button>
            </form>
          </Box>
        </Container>
      </div>
      <div className="testemonials">
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "primary.dark",
              marginBottom: "5.7rem",
              marginTop: "0",
              textAlign: "center",
            }}
            variant="h3"
            component="h2"
          >
            What people say about me
          </Typography>
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              px: "3.25rem",
            }}
          >
            <ArrowBackIosIcon fontSize="large" color="primary" /> */}
          {/* <Paper
              sx={{
                height: "27rem",
                width: "47.3rem",
                position: "relative",
                p: "4.3rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              elevation={3}
            >
              <Box>
                <Box
                  component="img"
                  sx={{
                    position: "absolute",
                    height: "7rem",
                    top: "-3rem",
                    left: "3rem",
                  }}
                  alt="Logo"
                  src={quote}
                />
                <Box
                  sx={{ zIndex
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      lineHeight: "180%",
                      color: "gray",
                      fontWeight: "500",
                      fontSize: "1.18rem",
                      display: "flex",
                      alignSelf: "center",
                    }}
                    maxWidth="31rem"
                    variant="body1"
                  >
                    "Ali is a dedicated chemist from Amman, with a strong
                    passion for molecules and chemical reactions that has led
                    him to establish a notable presence in the scientific
                    community."
                  </Typography>
                  <Box sx={{ marginRight: "-10rem", marginLeft: "5rem" }}>
                    <img className="image" src={person} alt="avatar" />
                    <Typography
                      sx={{
                        my: "0.1rem",
                        color: "primary.dark",
                        textAlign: "center",
                      }}
                      variant="h5"
                    >
                      John Wallas
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "500", textAlign: "center" }}
                      color="gray"
                      variant="subtitle2"
                    >
                      CEO AT Google
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper> */}
          {/* <ArrowForwardIosIcon fontSize="large" color="primary" /> */}
          {/* </Box> */}
          <Carousel
            NextIcon={<ArrowForwardIosIcon fontSize="large" color="primary" />}
            PrevIcon={<ArrowBackIosIcon fontSize="large" color="primary" />}
            fullHeightHover={false}
            navButtonsProps={{
              style: {
                backgroundColor: "#000000",
                // marginTop: "13rem",

                borderRadius: 4,

                // position: "absolute",
              },
            }}
            indicatorContainerProps={{
              style: {
                marginTop: "50px",
              },
            }}
            stopAutoPlayOnHover={true}
            swipe={true}
            navButtonsAlwaysVisible={true}
            navButtonsWrapperProps={{
              style: {
                position: "absolute",
                // marginTop: "12rem",
                next: {
                  right: "15rem",
                },
              },
            }}
            animation="fade"
            className="test"
            sx={{
              mx: "auto",
              maxWidth: "1075px",
            }}
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Container>
      </div>
    </div>
  );
}

function Item(props) {
  return (
    <Paper
      sx={{
        height: "27rem",
        maxWidth: "47.3rem",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        mx: "auto",
        my: "2rem",
        p: "4.3rem",
      }}
      elevation={8}
    >
      <Box>
        <Box
          component="img"
          sx={{
            position: "absolute",
            height: "7rem",
            top: "-3rem",
            left: "3rem",
            zIndex: "10",
          }}
          alt="Logo"
          src={quote}
        />
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography
            sx={{
              lineHeight: "180%",
              color: "gray",
              fontWeight: "500",
              fontSize: "1.18rem",
              display: "flex",
              alignSelf: "center",
            }}
            maxWidth="31rem"
            variant="body1"
          >
            {props.item.description}
          </Typography>
          <Box sx={{ marginRight: "-7rem", marginLeft: "5rem" }}>
            <img className="image" src={person} alt="avatar" />
            <Typography
              sx={{
                my: "0.1rem",
                color: "primary.dark",
                textAlign: "center",
              }}
              variant="h5"
            >
              {props.item.name}
            </Typography>
            <Typography
              sx={{ fontWeight: "500", textAlign: "center" }}
              color="gray"
              variant="subtitle2"
            >
              {props.item.title}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
