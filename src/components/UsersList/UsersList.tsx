import UserCard from "../UserCard/UserCard";
import UsersListStyled from "./UsersListStyled";
import { useAppSelector } from "../../store/hooks";
import { User } from "../../store/types";

const UsersList = (): React.ReactElement => {
  const users = useAppSelector((state) => state.usersState.user);

  return (
    <UsersListStyled>
      {users.map((user: User) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </UsersListStyled>
  );
};

export default UsersList;
