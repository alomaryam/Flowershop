import React from "react";
import styled from "styled-components";

const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 30%;
`;

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder="Search your favorite Vase "
    />
  );
};

export default SearchBar;
