const ProductItem = (props) => {
  const item = props.item;

  return (
    <div>
      <h1> {item.image} </h1>
      <h2>{item.name}</h2>
      <h3>{item.price} KD </h3>
    </div>
  );
};
export default ProductItem;
