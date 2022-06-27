import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Conversion from '../Conversion/Conversion'

function Layout({ data, children }) {

  return (
    <div>
      <Header data={data[0]} />
         <main>{children}</main>
      <Conversion data={data[1]} />
      <Footer data={data[2]} />
    </div>
  );
}

export default Layout;
