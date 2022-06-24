import Header from './../../components/Header/Header';
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import Benefits from "./components/Benefits/Benefits";
import Stats from "./components/Stats/Stats";
import MobileApp from "./components/MobileApp/MobileApp";
import Testimonials from "./components/Testimonials/Testimonials";
import Conversion from "./components/Conversion/Conversion";
import Footer from "./../../components/Footer/Footer";

const Home = ({ page }) => {
  console.log(page[3])
  return (
    <>
      <Header data={page[0]} />
      <div className="homepage">
        <Hero data={page[1]} />
        <Partners data={page[2]} />
        <Benefits data={page[3]} />
        <Stats data={page[4]} />
        <MobileApp data={page[5]} />
        <Testimonials data={page[6]} />
        <Conversion data={page[7]} />
      </div>
      <Footer data={page[8]} /> 
    </>
  );
};

export default Home;
