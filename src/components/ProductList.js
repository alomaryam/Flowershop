import Flowers from "./Products.js";
import ProductItem from "./ProductItem.js";
import styled from "styled-components";

const Items = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-content: center;
  flex-wrap: wrap;
  font-size: 13pt;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
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
