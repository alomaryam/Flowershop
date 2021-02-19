import flowershop from "./images/flowershop.jpg";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 30pt;
  text-align: center;
`;
const Sentence = styled.p`
  font-size: 17pt;
  color: #f6f0ec;
  text-align: center;
`;
const Image = styled.img`
  height: 400px;
  width: 100%;
`;

const Home = () => {
  return (
    <div>
      <Title>Florescence</Title>
      <Sentence>Checkout Our Fresh Blooms!</Sentence>
      <Image alt="flowershop" src={flowershop} />
    </div>
  );
};

export default Home;
