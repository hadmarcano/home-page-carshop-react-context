import React, { createContext, useState, useEffect } from "react";
import { productsGet, idProductGet } from "../utils/index";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [doneFetch, setDoneFetch] = useState();

  // InitialState del SHOP-CAR
  const [shopCar, setShopCar] = useState([]); // Items del carrito de compras!!!

  const [badgeState, setBadgeState] = useState([]);

  useEffect(() => getShowProducts(), []);

  const getShowProducts = () => {
    fetch(productsGet())
      .then((res) => res.json())
      .then((data) => {
        setDoneFetch(true);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  };

  const addItemToShopCar = (idItem, itemName) => {
    // Actualizamos el estado del carrito de compras!
    setShopCar([
      {
        id: idItem,
        product: itemName,
        cantidad: 1,
      },
    ]);
    console.log(idItem, itemName);
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
