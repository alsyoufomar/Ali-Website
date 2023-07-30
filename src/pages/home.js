import "../styles/home.css";
import Hero from "../components/home/hero";
import LatestResearch from "../components/home/latestResearch";
import SubscribeCTA from "../components/home/subscribeCTA";
import Testimonial from "../components/home/testimonial/testimonial";
import Footer from "../components/footer/footer";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { StateContext } from "../store/index";
import Loading from "./loading";
import ReqError from "./error";

export default function Home() {
  const host = process.env.REACT_APP_API_URL;
  const { loading, error } = useFetch(
    `${host}/api/home?populate[blogs][populate][1]=main_image`,
    "SET_HOME"
  );
  const [state] = useContext(StateContext);
  if (loading) return <Loading />;
  if (error) return <ReqError props={error} />;

  if (!state.home.data) return <></>;
  return (
    <div className="home">
      <Hero data={state.home.data.attributes} />
      <LatestResearch data={state.home.data.attributes} />
      <SubscribeCTA data={state.home.data.attributes} />
      <Testimonial data={state.home.data.attributes} />
      <Footer />
    </div>
  );
}
