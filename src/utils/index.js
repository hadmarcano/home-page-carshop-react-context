// API calls ...

const get_products =
  "https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products";

const get_product_id =
  "https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products/:id";

// Defining Api Calls ...

export const productsGet = () => `${get_products}`;

export const idProductGet = (id) => `${get_product_id}`;
