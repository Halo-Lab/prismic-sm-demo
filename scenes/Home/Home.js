import Head from "next/head";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import Benefits from "./components/Benefits/Benefits";
import Stats from "./components/Stats/Stats";
import MobileApp from "./components/MobileApp/MobileApp";
import Testimonials from "./components/Testimonials/Testimonials";
import Conversion from "../../components/Conversion/Conversion";
import getSlice from "../../utils/getSlice"; 

const Home = ({ page }) => {
  const {pageseotitle, pageseodescription, slices} = page;

  return (
    <>
      <Head className="head">
        <title>{pageseotitle}</title>
        <meta name="description" content={pageseodescription} />        
      </Head>
      <div className="homepage">
        <Hero data={getSlice(slices, "hero")} />
        <Partners data={getSlice(slices, "partners")} />
        <Benefits data={getSlice(slices, "benefits")} />
        <Stats data={getSlice(slices, "stats")} />
        <MobileApp data={getSlice(slices, "mobile_app")} />
        <Testimonials data={getSlice(slices, "testimonials")} />      
        <Conversion data={getSlice(slices, "conversion")} />
      </div>
    </>
  );
};

export default Home;
