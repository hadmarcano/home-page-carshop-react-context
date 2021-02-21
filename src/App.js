import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Header from "./components/Common/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Common/Footer.js";
import CarShop from "./components/Products/Car-shop";
import ProductsContextProvider from "./contexts/ProductsContext";

const App = () => (
  <Fragment>
    <div>
      <Container maxWidth="lg">
        <ProductsContextProvider>
          <CarShop />
        </ProductsContextProvider>
        <ProductsContextProvider>
          <Header />
        </ProductsContextProvider>
        <Main />
        <Footer />
      </Container>
    </div>
  </Fragment>
);

export default App;
