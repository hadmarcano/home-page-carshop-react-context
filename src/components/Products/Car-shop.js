import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

export const CarShop = () => {
  const { shopCar } = useContext(ProductsContext);

  return (
    <div id="modal">
      <h3>Carrito de compras</h3>
      {shopCar.length > 0 ? (
        shopCar.map((producto, index) => {
          return (
            <div className="car-item">
              <strong>{producto.producto}</strong>
              <span>{producto.cantidad}</span>
            </div>
          );
        })
      ) : (
        <p>Tu carrito esta vacío</p>
      )}
    </div>
  );
};

export default CarShop;
