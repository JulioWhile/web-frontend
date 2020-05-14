export interface Usuario {
  success: boolean;
  count: number;
  users: User[];
}

export interface User {
  _id?: string;
  username: string;
  password: string;
  nivel: number;
  __v?: number;
}
