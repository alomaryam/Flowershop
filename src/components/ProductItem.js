import styled from "styled-components";

const FlowerImage = styled.img`
  height: 400px;
  width: 350px;
  margin: 5px;
`;

const ProductItem = (props) => {
  const item = props.item;

  return (
    <div>
      <FlowerImage src={item.image} />
      <h2>{item.name}</h2>
      <h3>{item.price} KD </h3>
    </div>
  );
};
export default ProductItem;
