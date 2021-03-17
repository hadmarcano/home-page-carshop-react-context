import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

export const CarShop = () => {
  const { shopCar } = useContext(ProductsContext);
  return (
    <div id="modal">
      <h3>Carrito de compras</h3>
      {shopCar.length > 0 ? (
        shopCar.map(item => 
          (
          <div className="car-item" key={item.id}>
            <strong>{item.product}</strong>
            {/* <span>{producto.cantidad}</span> */}
          </div>
          )
        )
      ) : (
        <p>Tu carrito esta vacío</p>
      )}
    </div>
  );
};

export default CarShop;
