import * as React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Business from "../../components/Business";
import Input from "../../components/Input";
import Popup from "../../components/Popup";
import {
  createBusiness,
  getBusinessList,
  selectBusinessList,
} from "../../slices/business.slice";
import {
  Container,
  Header,
  Title,
  Button,
  List,
  PopupTitle,
} from "./BusinessList.styled";

const CreateBusiness = () => {
  const { t: translation } = useTranslation();
  const [name, setName] = React.useState("");
  const dispatch = useDispatch();

  const handleConfirm = () => {
    if (name) {
      dispatch(createBusiness({ name }));
    }
  };

  return (
    <Popup
      trigger={<Button>{translation("business.list.create.button")}</Button>}
      confirm={{
        label: translation("business.create.popup.confirm.button"),
        action: handleConfirm,
      }}
    >
      <PopupTitle>{translation("business.create.popup.title")}</PopupTitle>
      <Input
        type="text"
        id="businessName"
        label={translation("business.create.popup.name.title")}
        onChange={({ target: { value } }) => setName(value)}
      />
    </Popup>
  );
};

const BusinessList = () => {
  const { t: translation } = useTranslation();
  const dispatch = useDispatch();
  const businessList = useSelector(selectBusinessList);

  React.useEffect(() => {
    dispatch(getBusinessList());
  }, []);

  return (
    <Container>
      <Header>
        <Title>{translation("business.list.title")}</Title>
        <CreateBusiness />
      </Header>
      <List>
        {businessList.map((business) => (
          <Business
            key={business.businessId}
            businessId={business.businessId}
            name={business.name}
          />
        ))}
      </List>
    </Container>
  );
};

export default BusinessList;
