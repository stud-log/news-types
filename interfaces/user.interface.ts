export const UserRole = {
  student: 'student',
  headman: 'headman',
  admin: 'admin',
} as const;

export interface IUser {
  id?: number;

  firstName: string;

  lastName: string;

  email: string;

  phone: string;

  group: string;

  avatar: string;

  role?: keyof typeof UserRole;
}
