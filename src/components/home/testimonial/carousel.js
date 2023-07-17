import Carousel from "react-material-ui-carousel";
import Testimonial from "./testimonialCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "@mui/material";
import React from "react";

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

export default function CarouselCard(props) {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const navBtnsAlwaysVisible = isMediumScreen && isLargeScreen;

  return (
    <Carousel
      NextIcon={<ArrowForwardIosIcon fontSize="large" color="primary" />}
      PrevIcon={<ArrowBackIosIcon fontSize="large" color="primary" />}
      fullHeightHover={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#00000000",
          borderRadius: 4,
          // marginTop: "10rem",
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: "50px",
        },
      }}
      stopAutoPlayOnHover={true}
      swipe={true}
      navButtonsAlwaysInvisible={!navBtnsAlwaysVisible}
      navButtonsAlwaysVisible={navBtnsAlwaysVisible}
      navButtonsWrapperProps={{
        style: {
          // position: "absolute",
          next: {
            right: "15rem",
          },
        },
      }}
      animation="fade"
      sx={{
        mx: "auto",
        maxWidth: "1075px",
      }}
    >
      {items.map((item, i) => (
        <Testimonial key={i} item={item} />
      ))}
    </Carousel>
  );
}
