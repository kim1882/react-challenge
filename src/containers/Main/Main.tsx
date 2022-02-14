import { Routes, Route } from "react-router-dom";
import BusinessList from "../BusinessList";
import PersonsList from "../PersonsList";
import Sidebar from "../Sidebar";
import Container from "./Main.styled";

const Main = () => {
  return (
    <Container>
      <Sidebar />
      <Routes>
        <Route path="/" element={<BusinessList />} />
        <Route path="/business/:businessId" element={<PersonsList />} />
      </Routes>
    </Container>
  );
};

export default Main;
