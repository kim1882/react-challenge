import * as React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  IBusiness,
  updateBusiness,
  deleteBusiness,
} from "../../slices/business.slice";
import Input from "../Input";
import Popup from "../Popup";
import { Actions, Container, PopupTitle } from "./Business.styled";

const UpdateBusiness = ({ businessId: id, name }: IBusiness) => {
  const { t: translation } = useTranslation();
  const [newName, setNewName] = React.useState(name);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    if (newName !== name) {
      dispatch(updateBusiness({ id, name: newName }));
    }
  };

  return (
    <Popup
      trigger={<i className="icon-action-edit" />}
      confirm={{
        label: translation("business.update.popup.confirm.button"),
        action: handleConfirm,
      }}
    >
      <PopupTitle>{translation("business.update.popup.title")}</PopupTitle>
      <Input
        type="text"
        id="newBusinessName"
        label={translation("business.update.popup.name.title")}
        value={newName}
        onChange={({ target: { value } }) => setNewName(value)}
      />
    </Popup>
  );
};

const DeleteBusiness = ({ businessId: id, name }: IBusiness) => {
  const { t: translation } = useTranslation();
  const dispatch = useDispatch();

  return (
    <Popup
      trigger={<i className="icon-action-delete" />}
      confirm={{
        label: translation("business.delete.popup.confirm.button"),
        action: () => dispatch(deleteBusiness({ id })),
      }}
      isWarning
    >
      <PopupTitle>
        {translation("business.delete.popup.title", { businessName: name })}
      </PopupTitle>
    </Popup>
  );
};

const Business = ({ businessId, name }: IBusiness) => {
  return (
    <Container>
      <span>{name}</span>
      <Actions>
        <UpdateBusiness businessId={businessId} name={name} />
        <DeleteBusiness businessId={businessId} name={name} />
      </Actions>
    </Container>
  );
};

export default Business;
