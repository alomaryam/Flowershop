import flowershop from "./images/flowershop.jpg";
import styled from "styled-components";

const Title = styled.h1`
  font-family: Kunstler Script;
  font-size: 30pt;
  color: #54424b;
  text-align: center;
`;
const Sentence = styled.p`
  font-family: Kunstler Script;
  font-size: 17pt;
  color: #947886;
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
      <Sentence>Checkout our Fresh Blooms!</Sentence>
      <Image alt="flowershop" src={flowershop} />
    </div>
  );
};

export default Home;
