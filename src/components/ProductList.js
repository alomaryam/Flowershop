import Flowers from "./Products.js";
import ProductItem from "./ProductItem.js";
import styled from "styled-components";
import SearchBar from "./SearchBar.js";
import { useState } from "react";

const Items = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-content: center;
  flex-wrap: wrap;
  font-size: 13pt;
`;

let FlowersList = () => {
  const [query, setQuery] = useState("");

  const flowerList = Flowers.filter((flower) =>
    flower.name.includes(query)
  ).map((flower) => <ProductItem item={flower} key={flower.id} />);

  console.log("filteredFlowers", flowerList);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <Items>{flowerList}</Items>
    </>
  );
};

export default FlowersList;
