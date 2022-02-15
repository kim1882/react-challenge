import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Container from "./MenuItem.styled";

const MenuItem = ({ route, name, icon }) => {
  const { t: translation } = useTranslation();
  return (
    <Container>
      <NavLink
        to={route}
        className={({ isActive }) => `navLink${isActive ? " active" : ""}`}
      >
        <i className={icon} />
        {translation(name)}
      </NavLink>
    </Container>
  );
};

export default MenuItem;
