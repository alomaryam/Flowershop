import styled from "styled-components";
import { Link } from "react-router-dom";

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const Logo = styled(Link)`
  padding: 3.5em;
`;

export const FlowersList = styled(Link)`
  padding: 3.5em;
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.backgroundColor};
`;
