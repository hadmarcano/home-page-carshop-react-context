import React, { useContext } from "react";
import CollectionItem from "./Collection-item";
import { ProductsContext } from "../../contexts/ProductsContext";
import Carousel from "react-elastic-carousel";

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
          {
            doneFetch ? (
              <p>Cargando ...</p>
            ) : (
              products.map((item) => (
                <div className="collection-item-container">
                    <CollectionItem 
                      infoItem={item}
                      addItemToShopCar={addItemToShopCar}
                    />
                </div>
              ))
            )
          }
          
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;
