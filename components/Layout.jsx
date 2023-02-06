
import Footer from "./Footer";
import { Amatic_SC } from "@next/font/google";
import { Audiowide } from "@next/font/google";

const audiowide = Audiowide({ weight: '400', subsets: ["latin"] });


const Layout = ({ children }) => {
  return (
    <>
      
      {children}
      <Footer audiowide={audiowide}/>
    </>
  );
};

export default Layout;
