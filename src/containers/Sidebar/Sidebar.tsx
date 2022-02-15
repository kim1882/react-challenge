import { useSelector } from "react-redux";
import { selectUserProfile } from "../../slices/profile.slice";
import { Container, Header, Menu, Logo } from "./Sidebar.styled";
import Profile from "../../components/Profile";
import { menu } from "../../config/index";
import MenuItem from "../../components/MenuItem";

const Sidebar = () => {
  const userProfile = useSelector(selectUserProfile);

  return (
    <Container>
      <Header>
        <Logo />
        <Profile user={userProfile} />
      </Header>
      <Menu>
        {menu.map((item) => (
          <MenuItem
            key={item.key}
            route={item.route}
            name={item.key}
            icon={item.icon}
          />
        ))}
      </Menu>
    </Container>
  );
};

export default Sidebar;
