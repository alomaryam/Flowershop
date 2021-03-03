import styled from "styled-components";
import productStore from "../stores/productStore";

const FlowerImage = styled.img`
  height: 400px;
  width: 350px;
  margin: 5px;
`;

const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

const ProductItem = ({ item }) => {
  return (
    <div>
      <FlowerImage src={item.image} />
      <h2>{item.name}</h2>
      <p>{item.price} KD </p>
      <p>{item.description}</p>
      <DeleteButtonStyled onClick={() => productStore.deleteFlower(item.id)}>
        Delete
      </DeleteButtonStyled>
    </div>
  );
};

export default ProductItem;

/**/
