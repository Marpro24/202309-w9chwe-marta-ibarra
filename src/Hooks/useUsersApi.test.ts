import { renderHook } from "@testing-library/react";
import useUsersApi from "./useUsersApi";
import mockUsers from "../mocks/usersMocks";

describe("Given a useUsersApi hook", () => {
  describe("When it requests the information of King Goblin and the Nipper Stick", () => {
    test("Then it should show King Goblin's and the Nipper Stick's information", async () => {
      const expectedUsers = mockUsers;

      const {
        result: {
          current: { getUsers },
        },
      } = renderHook(() => useUsersApi());
      const users = await getUsers();

      expect(users).toStrictEqual(expectedUsers);
    });
  });
});
