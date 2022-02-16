import { Container, Field, Label } from "./Input.styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ id, label, ...rest }) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Field id={id} {...rest} />
    </Container>
  );
};

export default Input;
