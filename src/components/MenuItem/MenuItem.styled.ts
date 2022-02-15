import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 1.5rem;

  .navLink {
    color: #6b6e74;
    font-weight: 700;
    display: flex;
    height: 4rem;
    align-items: center;

    i {
      display: flex;
      width: 4rem;
      justify-content: center;
      font-size: 1.4rem;
    }

    &.active {
      color: blue;
    }
  }
`;

export default Container;
