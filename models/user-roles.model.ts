import { RolePermission } from './role-permissions.model';
import { User } from './user.model';

export class UserRole {
  readonly id: number;

  readonly title: string;

  readonly users: User[];

  readonly permissions: RolePermission;

  readonly createdAt: string;
  readonly updatedAt: string;
}
