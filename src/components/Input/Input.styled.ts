import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #6b6e74;
  margin-bottom: 0.8rem;
`;

export const Field = styled.input`
  outline: none;
  padding: 1.2rem;
  border: 0.1rem solid #dadce0;
  font-size: 1.4rem;
  border-radius: 0.5rem;

  &:focus {
    border: 0.1rem solid royalblue;
    background: #f8f8f8;
  }
`;
