import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ siteconfig, children }) {
  return (
    <div>
      <Header LayoutData={siteconfig} />
      <main>{children}</main>
      <Footer LayoutData={siteconfig} />
    </div>
  );
}

export default Layout;
