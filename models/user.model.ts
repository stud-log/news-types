import { Group } from './group.model';
import { UserRoles } from './userRoles.model';
import { UserStatus } from '../interfaces/user.interface';

export class User {
  readonly id: number;

  readonly roleId: string;

  readonly groupId: string;

  readonly firstName: string;

  readonly lastName: string;

  readonly email: string;

  private readonly password?: string;

  readonly phone: string;

  readonly group: Group;

  readonly avatar: string;

  readonly status: keyof typeof UserStatus;

  readonly role: UserRoles;

  readonly createdAt: string;
  readonly updatedAt: string;
}
