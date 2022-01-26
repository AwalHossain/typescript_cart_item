import Drawer from "@material-ui/core/Drawer";
import { AddShoppingCart } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import { Wrapper } from "./App.styles";
import { useQuery } from "react-query";
import { LinearProgress } from "@material-ui/core";

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
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  console.log(data);

  return (
    <div className="App">
      <h1>Start from here</h1>
    </div>
  );
};

export default App;
