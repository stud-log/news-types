import { Group } from './group.model';
import { Log } from './logs.model';
import { Record } from './records.model';
import { Subject } from './subject.model';
import { UserAchievement } from './user-achievements.model';
import { UserAttendance } from './user-attendance.model';
import { UserComment } from './user-comments.model';
import { UserFavorite } from './user-favorites.model';
import { UserNotification } from './user-notifications.model';
import { UserRole } from './user-roles.model';
import { UserSetting } from './user-settings.model';
import { UserTask } from './user-tasks.model';
import { UserTeam } from './user-teams.model';

export const UserStatus = {
  inReview: 'inReview',
  approved: 'approved',
  rejected: 'rejected',
  deleted: 'deleted'
} as const;

const UserStatusRu = {
  inReview: 'на проверке',
  approved: 'одобрен',
  rejected: 'отклонен',
  deleted: 'удален'
} as const;

export const getUserStatusRu = (status: keyof typeof UserStatus) => {
  return UserStatusRu[status];
};

export class User {
  readonly id: number;

  readonly roleId: number;

  readonly role: UserRole;

  readonly groupId: number;

  readonly group: Group;

  readonly nickname: string | null;

  readonly firstName: string;

  readonly lastName: string;

  readonly patronymic: string;

  readonly email: string;

  readonly password: string;

  readonly phone: string;

  readonly avatarUrl: string | null;

  readonly createdFromAdminPanel: boolean;

  readonly settings: UserSetting;

  readonly comments: UserComment[];

  readonly attendances: UserAttendance[];

  readonly favorites: UserFavorite[];

  readonly logs: Log[];

  readonly notifications: UserNotification[];

  readonly tasks: UserTask[];

  readonly subjects: Subject[];

  readonly records: Record[];

  readonly teams: UserTeam[];

  readonly achievements: UserAchievement[];

  readonly status: keyof typeof UserStatus;

  readonly createdAt: string;
  readonly updatedAt: string;
  
}
