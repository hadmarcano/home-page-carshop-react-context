import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import starFill from "../../assets/img/star.png";
import starVoid from "../../assets/img/star_alt.png";

const CollectionItem = ({ infoItem, addItemToShopCar }) => {
  const {
    id,
    product,
    img,
    sku,
    description,
    category,
    price,
    color,
  } = infoItem;

  return (
    <Paper elevation={3} className="paper-item-detail">
      <div className="image">
        <img src={img} alt={`item-${id}`} width="230px" height="230px" />
      </div>
      <div className="collection-footer">
        <span>{product}</span>
        <div className="rate-container">
          <div className="star-rate">
            <img src={starFill} alt="star-fill-1" />
            <img src={starFill} alt="star-fill-2" />
            <img src={starFill} alt="star-fill-3" />
            <img src={starFill} alt="star-fill-4" />
            <img src={starVoid} alt="star-void-5" />
          </div>
        </div>
        <strong>{`por R$ ${price}`}</strong>
        <span>{`ou em 2x de R$ ${Math.trunc(price * 0.8)}.00`}</span>
        <Button
          variant="contained"
          color="primary"
          className="button-comprar"
          onClick={() => addItemToShopCar(product)}
        >
          COMPRAR
        </Button>
      </div>
    </Paper>
  );
};

export default CollectionItem;
