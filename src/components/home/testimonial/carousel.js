import Carousel from "react-material-ui-carousel";
import Testimonial from "./testimonialCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
  return (
    <Carousel
      NextIcon={<ArrowForwardIosIcon fontSize="large" color="primary" />}
      PrevIcon={<ArrowBackIosIcon fontSize="large" color="primary" />}
      fullHeightHover={false}
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
      navButtonsAlwaysVisible={true}
      navButtonsWrapperProps={{
        style: {
          position: "absolute",
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
        <Testimonial key={i} item={item} />
      ))}
    </Carousel>
  );
}
