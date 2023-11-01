import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { Container, Header, Link, Footer } from "./SharedLayout.styled";
import logo from "../../images/logo.png";
import catalog_icon from "../../images/catalog_icon.png";
import heart_icon from "../../images/heart_icon.png";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            <img src={logo} alt="auto-icon" width={40} height={40} />
            <span>Main page</span>
          </Link>
          <Link to="/catalog">
            <img src={catalog_icon} alt="catalog-icon" width={40} height={40} />
            <span>Catalog</span>
          </Link>
          <Link to="/favorites">
            <img src={heart_icon} alt="heart-icon" width={40} height={40} />
            <span>Favorites</span>
          </Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* <Footer>Contacts with us: &#9990; +380730000000 </Footer> */}
    </Container>
  );
};
