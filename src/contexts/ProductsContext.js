import React, { createContext, useState, useEffect } from "react";
import { productsGet, idProductGet } from "../utils/index";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [doneFetch, setDoneFetch] = useState(true);

  // InitialState del SHOP-CAR
  const [shopCar, setShopCar] = useState([]); // Items del carrito de compras!!!

  // const [badgeState, setBadgeState] = useState([]);

  const getShowProducts = () => {
    fetch(productsGet())
      .then(res => res.json())
      .then(data => {
        setDoneFetch(false);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getShowProducts();
  }, [])

  const addItemToShopCar = (itemName) => {
    // Actualizamos el estado del carrito de compras!
    console.log(shopCar)
    setShopCar([
      ...shopCar,
      {
        id: new Date().getTime(),
        product: itemName
      },
    ]);
  };

  return (
    <ProductsContext.Provider
      value={{
        doneFetch,
        products,
        shopCar,
        addItemToShopCar,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
