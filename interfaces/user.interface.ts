export const UserRole = {
  student: 'student',
  headman: 'headman',
  admin: 'admin',
} as const;

export const UserStatus = {
  inReview: 'inReview',
  approved: 'approved',
  rejected: 'rejected',
} as const;

export interface IUser {
  id?: number;

  firstName: string;

  lastName: string;

  email: string;

  phone: string;

  group: string;

  password: string;

  avatar: string;

  status?: keyof typeof UserStatus;

  role?: keyof typeof UserRole;
}
