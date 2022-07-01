import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ isBilling, children }) => {
  return (
    <>
      <Header isBilling={isBilling} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;