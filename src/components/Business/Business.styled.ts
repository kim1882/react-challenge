import styled from "styled-components";

export const Container = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
`;

export const Actions = styled.div`
  width: 6.8rem;
  display: flex;
  justify-content: space-between;

  i {
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const PopupTitle = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2.4rem;
`;
