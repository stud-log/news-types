import { UserRole } from './user-roles.model';

/**
 * Может показаться излишним, так как в нашем приложении всего две роли - "Студент" и "Староста".
 * Однако, за расширением приложения могут быть добавлены новые роли и новые разрешения.
 * Потенциально - роль "Редактор", который например не сможет отправлять приглашения,
 * но сможет редактировать и добавлять посты.
 */

export class RolePermission {
  readonly id: number;
    
  readonly roleId: number;
    
  readonly role: UserRole;

  readonly canEdit: string;

  readonly canInvite: string;
  
  readonly createdAt: string;
  readonly updatedAt: string;
}
