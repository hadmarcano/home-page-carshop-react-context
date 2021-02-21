import React from "react";
import CarouselComponent from "../Products/CarouselComponent";
import ProductsContextProvider from "../../contexts/ProductsContext";
import mainBanner from "../../assets/img/Banner.jpg";
import Container from "@material-ui/core/Container";

const Main = () => {
  return (
    <>
      <div className="main-banner">
        <img className="banner" src={mainBanner} alt="banner" />
      </div>
      <Container maxWidth="lg" className="sliding-container">
        <div className="section-name">
          <div className="sliding-products">
            <ProductsContextProvider>
              <CarouselComponent />
            </ProductsContextProvider>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Main;
