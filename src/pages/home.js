import "../styles/home.css";
import Hero from "../components/home/hero";
import LatestResearch from "../components/home/latestResearch";
import SubscribeCTA from "../components/home/subscribeCTA";
import Testimonial from "../components/home/testimonial/testimonial";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <LatestResearch />
      <SubscribeCTA />
      <Testimonial />
      {/* <Footer /> */}
    </div>
  );
}
