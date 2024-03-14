import { Group } from './group.model';
import { UserAchievement } from './user-achievements.model';
import { UserAttendance } from './user-attendance.model';
import { UserComment } from './user-comments.model';
import { UserFavorite } from './user-favorites.model';
import { UserNotification } from './user-notifications.model';
import { UserRole } from './user-roles.model';
import { UserTask } from './user-tasks.model';
import { UserTeam } from './user-teams.model';

export const UserStatus = {
  inReview: 'inReview',
  approved: 'approved',
  rejected: 'rejected',
} as const;

export class User {
  readonly id: number;

  readonly roleId: number;

  readonly role: UserRole;

  readonly groupId: number;

  readonly group: Group;

  readonly firstName: string;

  readonly lastName: string;

  readonly patronymic: string;

  readonly password: string;

  readonly phone: string;

  readonly avatarUrl: string | null;

  readonly comments: UserComment[];

  readonly attendances: UserAttendance[];

  readonly favorites: UserFavorite[];

  readonly notifications: UserNotification[];

  readonly tasks: UserTask[];

  readonly teams: UserTeam[];

  readonly achievements: UserAchievement[];

  readonly status: keyof typeof UserStatus;

  readonly createdAt: string;
  readonly updatedAt: string;
  
}
