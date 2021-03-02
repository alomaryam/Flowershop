import styled from "styled-components";
import { DeleteButtonStyled } from "./Styles.js";

const FlowerImage = styled.img`
  height: 400px;
  width: 350px;
  margin: 5px;
`;

const ProductItem = (props) => {
  const item = props.item;

  const handleDelete = () => {
    props.deleteVase(item.id);
    alert(`Delete Vase #${item.id}`);
  };

  return (
    <div>
      <FlowerImage src={item.image} />
      <h2>{item.name}</h2>
      <p>{item.price} KD </p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </div>
  );
};
export default ProductItem;
