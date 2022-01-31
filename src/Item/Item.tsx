import { Button } from "@material-ui/core";
import React from "react";
import { CartItemType } from "../App";
import { Wrapper } from "./Item.styles";
import "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt="" />
      <div>
        <h3>{item.title}</h3>
        <p>{item.title}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
    </Wrapper>
  );
};

export default Item;
