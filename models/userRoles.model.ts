import { RolePermissions } from "./rolePermissions.model";

export class UserRoles {
  readonly id: number;

  readonly title: string;
  
  readonly rolePermissions: RolePermissions;

  readonly createdAt: string;
  readonly updatedAt: string;
}
