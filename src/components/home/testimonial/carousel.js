import Carousel from "react-material-ui-carousel";
import Testimonial from "./testimonialCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "@mui/material";
import React from "react";
import useFetch from "../../../hooks/useFetch";
import { useContext } from "react";
import { StateContext } from "../../../store/index";

export default function CarouselCard() {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const navBtnsAlwaysVisible = isMediumScreen && isLargeScreen;

  const host = process.env.REACT_APP_API_URL;
  useFetch(
    `${host}/api/testimonials?populate[users_permissions_user][populate][1]=profile_pic`,
    "SET_TESTIMONIALS"
  );
  const [state] = useContext(StateContext);

  if (!state.testimonials.data) return <></>;

  return (
    <Carousel
      NextIcon={<ArrowForwardIosIcon fontSize="large" color="primary" />}
      PrevIcon={<ArrowBackIosIcon fontSize="large" color="primary" />}
      fullHeightHover={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#00000000",
          borderRadius: 4,
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
      {state.testimonials.data.map((item) => (
        <Testimonial key={item.id} item={item} />
      ))}
    </Carousel>
  );
}
