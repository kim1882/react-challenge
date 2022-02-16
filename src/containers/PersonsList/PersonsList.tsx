import * as React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Input from "../../components/Input";
import Person from "../../components/Person";
import Popup from "../../components/Popup";
import { ViewType } from "../../config";
import {
  createBusinessPerson,
  getBusinessPersonsList,
  IPerson,
  selectBusiness,
} from "../../slices/business.slice";
import {
  Container,
  Header,
  Title,
  Button,
  List,
  Grid,
  PopupTitle,
  View,
} from "./PersonsList.styled";

const CreateBusinessPerson = () => {
  const { t: translation } = useTranslation();
  const { businessId = "" } = useParams();
  const [person, setPerson] = React.useState<IPerson>({
    name: "",
    role: "",
    email: "",
    phone: "",
    join_date: new Date(),
  });
  const dispatch = useDispatch();

  const fields = [
    {
      label: "business.person.create.popup.name.title",
      attribute: "name",
    },
    {
      label: "business.person.create.popup.role.title",
      attribute: "role",
    },
    {
      label: "business.person.create.popup.email.title",
      attribute: "email",
    },
    {
      label: "business.person.create.popup.phone.title",
      attribute: "phone",
    },
    {
      label: "business.person.create.popup.joinDate.title",
      attribute: "join_date",
      type: "date",
    },
  ];

  const handleConfirm = () => {
    if (
      businessId &&
      person?.name &&
      person?.role &&
      person?.email &&
      person?.phone
    ) {
      dispatch(createBusinessPerson({ businessId, person }));
    }
  };

  return (
    <Popup
      trigger={
        <Button>{translation("business.person.list.create.button")}</Button>
      }
      confirm={{
        label: translation("business.person.create.popup.confirm.button"),
        action: handleConfirm,
      }}
    >
      <PopupTitle>
        {translation("business.person.create.popup.title")}
      </PopupTitle>
      {fields.map((item) => (
        <Input
          id={item.attribute}
          key={item.attribute}
          type={item.type || "text"}
          label={translation(item.label)}
          onChange={({ target: { value } }) =>
            setPerson((p: IPerson) => ({ ...p, [item.attribute]: value }))
          }
        />
      ))}
    </Popup>
  );
};

const PersonsList = () => {
  const dispatch = useDispatch();
  const { businessId = "" } = useParams();
  const business = useSelector(selectBusiness(businessId));
  const [viewType, setViewType] = React.useState<ViewType>(ViewType.list);

  React.useEffect(() => {
    dispatch(getBusinessPersonsList({ businessId }));
  }, []);

  const getItems = () =>
    business?.personsList?.map((person) => (
      <Person key={person.personId} viewType={viewType} person={person} />
    ));

  return (
    <Container>
      <Header>
        <Title>{business?.name}</Title>
        <View
          className={
            viewType === ViewType.list ? "icon-menu-overview" : "icon-view-list"
          }
          onClick={() =>
            setViewType(
              viewType === ViewType.list ? ViewType.grid : ViewType.list
            )
          }
        />
        <CreateBusinessPerson />
      </Header>
      {viewType === ViewType.list ? (
        <List>{getItems()}</List>
      ) : (
        <Grid>{getItems()}</Grid>
      )}
    </Container>
  );
};

export default PersonsList;
