import Flowers from "./Products.js";
import ProductItem from "./ProductItem.js";

let FlowersList = () => {
  return Flowers.map((flower) => <ProductItem item={flower} key={flower.id} />);
};

export default FlowersList;
