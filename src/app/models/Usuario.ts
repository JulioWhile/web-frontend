export interface Usuario {
  success: boolean;
  count: number;
  users: User[];
}

export interface User {
  _id?: string;
  name: string;
  email: string;
  nivel: number;
  __v?: number;
}
