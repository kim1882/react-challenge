import styled, { css } from "styled-components";

const fieldStyle = css`
  flex-basis: 100%;
  color: black;

  font-size: 1.6rem;
  line-height: 2.2rem;
  text-align: left;
`;

const commonStyles = css`
  .name {
    ${fieldStyle}
    font-weight: 600;
  }
  .role {
    ${fieldStyle}
    font-weight: 400;
  }
`;

export const ListItem = styled.div`
  display: flex;

  .personDetails {
    display: flex;
    flex-basis: 100%;
  }

  ${commonStyles}
`;

export const GridItem = styled.div`
  width: 30.4rem;
  height: 15.8rem;
  border: 0.1rem solid #c8c8cc;
  border-radius: 1.2rem;
  position: relative;

  ${commonStyles}

  .separator {
    position: absolute;
    top: 7.6rem;
    left: 1.2rem;
    width: 28rem;
    border-bottom: 0.1rem solid #efeeee;
  }

  .name {
    position: absolute;
    top: 2rem;
    left: 2.4rem;
    width: 20rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .role {
    position: absolute;
    top: 4.2rem;
    left: 2.4rem;
    font-size: 1.4rem;
    color: #8d929a;
  }

  .phone {
    position: absolute;
    top: 9rem;
    left: 2.4rem;
    font-weight: 600;
    ont-size: 1.4rem;
  }

  .email {
    position: absolute;
    top: 11.8rem;
    left: 2.4rem;
    font-weight: 600;
    ont-size: 1.4rem;
  }

  .actions {
    position: absolute;
    top: 2rem;
    right: 1.2rem;
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
