import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUsersActionCreator } from "../../store/features/userSlice/usersSlice";
import useUsersApi from "../../Hooks/useUsersApi";
import UsersList from "../../components/UsersList/UsersList";
import HomepageStyled from "./HomePageStyled";

const Homepage = (): React.ReactElement => {
  const { getUsers } = useUsersApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const currentUsers = await getUsers();
      dispatch(loadUsersActionCreator(currentUsers));
    })();
  }, [dispatch, getUsers]);

  return (
    <>
      <HomepageStyled className="title-container">
        <h1 className="title">Welcome to the Labyrinth</h1>
        <h2>Find your friends...and your foes</h2>
      </HomepageStyled>
      <UsersList />
    </>
  );
};

export default Homepage;
