import styled from "styled-components";

export const Account = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2.5rem;

  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    background: black;
    color: white;
    border-radius: 50%;
  }
  i {
    font-size: 0.6rem;
    margin-left: 1rem;
    cursor: pointer;
  }
`;
