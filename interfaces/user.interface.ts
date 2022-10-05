export const UserRole = {
  student: 'student',
  headman: 'headman',
  admin: 'admin',
} as const;

export interface IUser {
  id?: number;

  name: string;

  avatarImage: string;

  role?: keyof typeof UserRole;
}
