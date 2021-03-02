import productStore from "../stores/productStore.js";
import ProductItem from "./ProductItem.js";
// import Flowers from "./Products.js";
import styled from "styled-components";
import SearchBar from "./SearchBar.js";
import { useState } from "react";
import { observable } from "mobx";

const Items = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-content: center;
  flex-wrap: wrap;
  font-size: 13pt;
`;

let FlowersList = () => {
  const deleteVase = (flowerId) => {
    console.log(`Delete vase with the ID ${flowerId}`);
  };

  const [query, setQuery] = useState("");

  const flowerList = productStore.flowers
    .filter((flower) => flower.name.includes(query))
    .map((flower) => (
      <ProductItem item={flower} key={flower.id} deleteVase={deleteVase} />
    ));

  // console.log("filteredFlowers", flowerList);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <Items>{flowerList}</Items>
    </>
  );
};

export default observable(FlowersList);
