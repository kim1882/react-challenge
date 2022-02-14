import * as React from "react";
import { useDispatch } from "react-redux";
import { getBusinessList } from "../../slices/business.slice";
import Container from "./BusinessList.styled";

const BusinessList = () => {
  const dispatch = useDispatch();
  const [list, setList] = React.useState(null);

  React.useEffect(() => {
    if (list === null) {
      dispatch(getBusinessList());
    }
  }, [list, dispatch]);

  return <Container>Load Business List</Container>;
};

export default BusinessList;
