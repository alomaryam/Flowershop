import ProductItem from "./ProductItem.js";
// import Flowers from "./Products.js";
import styled from "styled-components";
import SearchBar from "./SearchBar.js";
import { useState } from "react";
import { observer } from "mobx-react";

const Items = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-content: center;
  flex-wrap: wrap;
  font-size: 13pt;
`;

let FlowersList = ({ flowers }) => {
  const [query, setQuery] = useState("");
  const flowerList = flowers
    .filter((flower) => flower.name.toLowerCase().includes(query.toLowerCase()))
    .map((flower) => <ProductItem item={flower} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <Items>{flowerList}</Items>
    </>
  );
};
export default observer(FlowersList);
