import * as React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  IPerson,
  updateBusinessPerson,
  deleteBusinessPerson,
} from "../../slices/business.slice";
import Input from "../Input";
import Popup from "../Popup";
import { Actions, Container, PopupTitle } from "./Person.styled";
import { useParams } from "react-router-dom";

interface IPersonProps {
  person: IPerson;
}

const UpdateBusinessPerson = ({ person }: IPersonProps) => {
  const { businessId } = useParams();
  const { t: translation } = useTranslation();
  const [newPerson, setNewPerson] = React.useState(person);
  const dispatch = useDispatch();

  const fields = [
    {
      label: "business.person.update.popup.name.title",
      attribute: "name",
    },
    {
      label: "business.person.update.popup.role.title",
      attribute: "role",
    },
    {
      label: "business.person.update.popup.email.title",
      attribute: "email",
    },
    {
      label: "business.person.update.popup.phone.title",
      attribute: "phone",
    },
    {
      label: "business.person.update.popup.joinDate.title",
      attribute: "join_date",
      type: "date",
    },
  ];

  const handleConfirm = () => {
    if (
      businessId &&
      person.personId &&
      JSON.stringify(newPerson) !== JSON.stringify(person)
    ) {
      dispatch(
        updateBusinessPerson({
          businessId,
          personId: person.personId,
          person: newPerson,
        })
      );
    }
  };

  return (
    <Popup
      trigger={<i className="icon-action-edit" />}
      confirm={{
        label: translation("business.person.update.popup.confirm.button"),
        action: handleConfirm,
      }}
    >
      <PopupTitle>
        {translation("business.person.update.popup.title")}
      </PopupTitle>
      {fields.map((item) => (
        <Input
          id={item.attribute}
          key={item.attribute}
          type={item.type || "text"}
          label={translation(item.label)}
          value={newPerson[item.attribute]}
          onChange={({ target: { value } }) =>
            setNewPerson((p: IPerson) => ({ ...p, [item.attribute]: value }))
          }
        />
      ))}
    </Popup>
  );
};

const DeleteBusinessPerson = ({ person }: IPersonProps) => {
  const { personId = "", name: personName } = person;
  const { businessId = "" } = useParams();
  const { t: translation } = useTranslation();
  const dispatch = useDispatch();

  return (
    <Popup
      trigger={<i className="icon-action-delete" />}
      confirm={{
        label: translation("business.person.delete.popup.confirm.button"),
        action: () => dispatch(deleteBusinessPerson({ businessId, personId })),
      }}
      isWarning
    >
      <PopupTitle>
        {translation("business.person.delete.popup.title", { personName })}
      </PopupTitle>
    </Popup>
  );
};

const Person = ({ person }: IPersonProps) => {
  return (
    <Container>
      <div className="personDetails">
        <span className="name">{person.name}</span>
        <span className="role">{person.role}</span>
      </div>
      <Actions>
        <UpdateBusinessPerson person={person} />
        <DeleteBusinessPerson person={person} />
      </Actions>
    </Container>
  );
};

export default Person;
