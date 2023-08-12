import { Typography, Box, Container } from "@mui/material";
import copyright from "../../assets/copyright.svg";
import { StateContext } from "../../store/index";
import useFetch from "../../hooks/useFetch";
import FooterForm from "./footerForm";
import { useContext } from "react";
import Social from "./social";
import Info from "./info";
import Menu from "./menu";
import "../../styles/home.css";

export default function Footer() {
  const host = process.env.REACT_APP_API_URL;
  useFetch(`${host}/api/footer`, "SET_FOOTER");
  const [state] = useContext(StateContext);
  if (!state.footer.data) return <></>;

  return (
    <div className="footer">
      <Container
        disableGutters
        maxWidth="container"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Container
          maxWidth="container"
          disableGutters={true}
          sx={{
            display: "flex",
            justifyContent: { xs: "start", lg: "space-between" },
            flexWrap: "wrap",
            gap: "3.35rem",
          }}
        >
          <Info props={state.footer.data.attributes} />
          <Menu />
          <Social props={state.footer.data.attributes} />
          <FooterForm />
        </Container>
        <Typography
          sx={{
            maxWidth: "16.75rem",
            color: "secondary.light",
            mt: { xs: "5rem", lg: "5rem" },
          }}
        >
          <img
            height="18"
            width="auto"
            alt="copyright"
            title="copyright icon"
            loading="lazy"
            src={copyright}
            style={{
              marginRight: "0.1rem",
              verticalAlign: "-3px",
            }}
          />
          {state.footer.data.attributes.copyright}
        </Typography>
      </Container>
    </div>
  );
}
