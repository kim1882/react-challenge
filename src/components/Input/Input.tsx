import { Container, Field, Label } from "./Input.styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ id, label, className, ...rest }) => {
  return (
    <Container className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Field id={id} {...rest} />
    </Container>
  );
};

export default Input;
