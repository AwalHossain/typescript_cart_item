import Drawer from "@material-ui/core/Drawer";
import { AddShoppingCart } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import { StyledButton, Wrapper } from "./App.styles";
import { useQuery } from "react-query";
import { LinearProgress } from "@material-ui/core";
import Item from "./Item/Item";
import { useState } from "react";
import Cart from "./Cart/Cart";

//Types
export type CartItemType = {
  id: number;
  category: string;
  descripttion: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  console.log(data);

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClick={() => setCartOpen(false)}>
        <Cart />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)}>
          <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}></Item>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
