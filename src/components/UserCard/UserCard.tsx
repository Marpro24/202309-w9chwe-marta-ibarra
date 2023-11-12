import { User } from "../../store/types";
import UserCardStyled from "./UserCardStyled";

interface UserProps {
  user: User;
}
const UserCard = ({ user }: UserProps): React.ReactElement => {
  return (
    <UserCardStyled className="user">
      <article className="user-container">
        <img
          src={user.image}
          alt={user.name}
          className="user__image"
          width={400}
          height={400}
        />
        <h2 className="user__name">{user.name}</h2>
        <span className="user__world">{`World: ${user.world}`}</span>
        <span>{`Friend or foe:${user.isFriend}`}</span>
      </article>
    </UserCardStyled>
  );
};

export default UserCard;
