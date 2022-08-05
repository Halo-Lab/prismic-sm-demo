import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import Benefits from "./components/Benefits/Benefits";
import Stats from "./components/Stats/Stats";
import MobileApp from "./components/MobileApp/MobileApp";
import Testimonials from "./components/Testimonials/Testimonials";
import getSlice from "../../utils/getSlice"; 

const Home = ({ page }) => {

  return (
    <div className="homepage">
      <Hero data={getSlice(page, "hero")} />
      <Partners data={getSlice(page, "partners")} />
      <Benefits data={getSlice(page, "benefits")} />
      <Stats data={getSlice(page, "stats")} />
      <MobileApp data={getSlice(page, "mobile_app")} />
      <Testimonials data={getSlice(page, "testimonials")} />
    </div>
  );
};

export default Home;
