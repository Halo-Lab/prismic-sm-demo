import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import Benefits from "./components/Benefits/Benefits";
import Stats from "./components/Stats/Stats";
import MobileApp from "./components/MobileApp/MobileApp";
import Testimonials from "./components/Testimonials/Testimonials";

const Home = ({ page }) => {
  return (
    <div className="homepage">
      <Hero data={page[0]} />
      <Partners data={page[1]} />
      <Benefits data={page[2]} />
      <Stats data={page[3]} />
      <MobileApp data={page[4]} />
      <Testimonials data={page[5]} />
    </div>
  );
};

export default Home;
