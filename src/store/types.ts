export interface User {
  id: number;
  name: string;
  world: string;
  isFriend: boolean;
  image: string;
}

export interface UsersStructure {
  user: User[];
}
