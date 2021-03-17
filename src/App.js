import React from "react";
import Container from "@material-ui/core/Container";
import Header from "./components/Common/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Common/Footer.js";
import CarShop from "./components/Products/Car-shop";
import ProductsContextProvider from "./contexts/ProductsContext";

const App = () => (
  <ProductsContextProvider>
    <div>
      <Container maxWidth="lg">
        <CarShop />
        <Header />
        <Main />
        <Footer />
      </Container>
    </div>
  </ProductsContextProvider>
);

export default App;
