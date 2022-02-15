import styled from "styled-components";
import logo from "../../assets/logo.png";

export const Container = styled.div`
  width: 25rem;
`;

export const Header = styled.section`
  height: 4rem;
  position: absolute;
  top: 8rem;
  left: 4rem;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  background-image: url(${logo});
  width: 11rem;
  height: 2.5rem;
`;

export const Menu = styled.section`
  position: absolute;
  top: 17.7rem;
  left: 3rem;
`;
