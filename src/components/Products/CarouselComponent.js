import React, { useContext } from "react";
import CollectionItem from "./Collection-item";
import { ProductsContext } from "../../contexts/ProductsContext";
import Carousel from "react-elastic-carousel";
import ProductsContextProvider from "../../contexts/ProductsContext";

const CarouselComponent = () => {
  const { doneFetch, products, addItemToShopCar } = useContext(ProductsContext);

  return (
    <>
      <strong style={{ textAlign: "start" }}>Mais Vendidos</strong>
      <div className="underlined">
        <strong>______</strong>
      </div>
      <br />
      <div className="carousel">
        <Carousel itemsToShow={4}>
          {products.map((item) => (
            <div key={item.id} className="collection-item-container">
              <ProductsContextProvider>
                <CollectionItem
                  infoItem={item}
                  addItemToShopCar={addItemToShopCar}
                />
              </ProductsContextProvider>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;
