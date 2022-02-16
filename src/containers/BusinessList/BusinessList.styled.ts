import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 25rem);
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  width: calc(100% - 7.9rem);
  justify-content: space-between;
  position: absolute;
  top: 17.5rem;
  left: 3.5rem;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 3rem;
  line-height: 4rem;
`;

export const Button = styled.button`
  width: 16.9rem;
  height: 4.8rem;
  border-radius: 10rem;
  border: 0;
  cursor: pointer;
  background: black;
  color: white;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2rem;
`;

export const List = styled.ul`
  position: absolute;
  top: 26.3rem;
  left: 3.5rem;
  width: calc(100% - 7.9rem);
  height: calc(100% - 30rem);
  overflow: auto;

  & > div {
    padding-bottom: 2.4rem;
  }
  & > div:not(:first-child) {
    padding-top: 2.4rem;
  }
  & > div:not(:last-child) {
    border-bottom: 0.1rem solid #f1f1f1;
  }
`;

export const PopupTitle = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 0.4rem;
`;
