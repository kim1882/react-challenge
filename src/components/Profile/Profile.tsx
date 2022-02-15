import { IProfile } from "../../slices/profile.slice";
import { Account } from "./Profile.styled";

interface IProfileProps {
  user: IProfile;
}

const Profile = ({ user }: IProfileProps) => {
  const { name } = user;

  const getInitials = (name) => {
    return name.split(" ").map((n) => n[0]);
  };

  return (
    <Account>
      <div className="avatar">{getInitials(name)}</div>
      <i className="icon-chevron" />
    </Account>
  );
};

export default Profile;
