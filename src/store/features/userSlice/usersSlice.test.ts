import mockUsers from "../../../mocks/usersMocks";
import { UsersStructure } from "../../types";
import { loadUsersActionCreator, usersReducer } from "./usersSlice";

describe("Given a usersReducer", () => {
  describe("When it receives an empty list and an intention to load 10 users in it", () => {
    test("Then it should show the list of l0 users in it", () => {
      const currentListState: UsersStructure = {
        user: [],
      };

      const usersList = mockUsers;

      const newUsersState = usersReducer(
        currentListState,
        loadUsersActionCreator(usersList),
      );

      expect(newUsersState.user).toStrictEqual(usersList);
    });
  });
});
