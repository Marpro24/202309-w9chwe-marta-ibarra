import axios from "axios";
import { useCallback } from "react";
import { User } from "../store/types";

const useUsersApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getUsers = useCallback(async () => {
    const { data: users } = await axios.get<User[]>("/characters");

    return users;
  }, []);

  return { getUsers };
};

export default useUsersApi;
