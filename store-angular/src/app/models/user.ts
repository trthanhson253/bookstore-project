import { Role } from "./role";

export class User {
  id: number;
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  confirmEmail: string;
  token: string;
  role: Role;
}
