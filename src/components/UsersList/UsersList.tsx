import UserCard from "../UserCard/UserCard";
import mockUsers from "../../mocks/usersMocks";
import UsersListStyled from "./UsersListStyled";

const UsersList = (): React.ReactElement => {
  const users = mockUsers;

  return (
    <UsersListStyled>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </UsersListStyled>
  );
};
export default UsersList;
