import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import getSlice from '../../utils/getSlice';

function Layout({ data, children }) {

  return (
    <div>
      <Header data={getSlice(data, "header")} />
         <main>{children}</main>
      <Footer data={getSlice(data, "footer")} />
    </div>
  );
}

export default Layout;
