import axios from 'axios';

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type CreateUser = {
  password: string;
  confirmPassword: string;
} & Omit<User, 'id'>;

export class UserService {
  public static async createUser(user: CreateUser): Promise<User> {
    console.log('Creating user...');
    return (await axios.post<User>('/users', user)).data;
  }
}