import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(32, 45, 92, 0.5);
  }

  &-content {
    opacity: 1;
    background: white;
    color: black;
    font-size: 1rem;
    overflow: visible;
    white-space: normal;
    line-height: 2rem;
    text-align: left;
    width: 45.2rem;
    height: fit-content;
    border-radius: 0.8rem;
    padding: 3.5rem 4rem;
    z-index: 100;
  }
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;

  .message {
    display: flex;
    flex-direction: column;

    h4,
    span {
      text-align: center;
    }
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;

  button:first-child {
    margin-right: 2rem;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: 1rem;
  background: black;
  color: white;
  border: none;
  border-bottom: 0.1rem solid white;
  font-size: 1.4rem;
  width: 9.4rem;
  height: 4.4rem;
  padding: 1.2rem 2.4rem;
  border-radius: 10rem;

  &.close {
    background: #f8f8f8;
    color: black;
  }
`;
