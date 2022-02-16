import styled, { css } from "styled-components";

const fieldStyle = css`
  flex-basis: 100%;
  color: black;

  font-size: 1.6rem;
  line-height: 2.2rem;
  text-align: left;
`;

export const Container = styled.div`
  display: flex;

  .personDetails {
    display: flex;
    flex-basis: 100%;
  }

  .name {
    ${fieldStyle}
    font-weight: 600;
  }
  .role {
    ${fieldStyle}
    font-weight: 400;
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
  margin-bottom: 0.4rem;
`;
