import { Group } from './group.model';
import { User } from './user.model';

export class CustomActivity {
  readonly id: number;

  readonly userId: number;

  readonly user: User;

  readonly groupId: number;

  readonly group: Group;

  readonly title: string;

  readonly description: string | null;

  readonly startDate: string;

  readonly endDate: string;

  readonly createdAt: string;
  readonly updatedAt: string;
}