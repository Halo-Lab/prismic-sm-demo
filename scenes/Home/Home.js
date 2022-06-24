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
  console.log(page[2])
  return (
    <>
      <Header data={page[0]} />
      <div className="homepage">
        <Hero data={page[1]} />
        <Partners data={page[2]} />
      </div>

    </>
  );
};

export default Home;

/*
  <Partners data={data} />
  <Benefits data={data} />
  <Stats data={data} />
  <MobileApp mobileApp={mobileApp} />
  <Testimonials testimonials={testimonials} />
  <Conversion conversion={conversion} />
</div>
<Footer /> 
*/
