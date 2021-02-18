import Flowers from "./Products.js";
import ProductItem from "./ProductItem.js";
import styled from "styled-components";

const Items = styled.div`
  display: flex;
  justify-content: space-around;
  color: #54424b;
  text-align: center;
  align-content: center;
  flex-wrap: wrap;
`;

let FlowersList = () => {
  return (
    <Items>
      {Flowers.map((flower) => (
        <ProductItem item={flower} key={flower.id} />
      ))}
    </Items>
  );
};

export default FlowersList;
