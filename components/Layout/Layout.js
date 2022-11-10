import { Inter } from '@next/font/google';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import getSlice from '../../utils/getSlice';

const inter = Inter({ subsets: ['latin'] });

function Layout({ data, children }) {
  return (
    <div className={inter.className}>
      <Header data={getSlice(data, "header")} />
         <main >{children}</main>
      <Footer data={getSlice(data, "footer")} />
    </div>
  );
}

export default Layout;
