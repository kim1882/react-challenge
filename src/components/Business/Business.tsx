import { IBusiness } from "../../slices/business.slice";
import { Actions, Container } from "./Business.styled";

const Business = ({ businessId, name, personsList }: IBusiness) => {
  return (
    <Container>
      <span>{name}</span>
      <Actions>
        <i className="icon-action-edit" onClick={() => null} />
        <i className="icon-action-delete" onClick={() => null} />
      </Actions>
    </Container>
  );
};

export default Business;
