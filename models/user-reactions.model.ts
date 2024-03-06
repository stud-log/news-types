import { Record } from './records.model';
import { User } from './user.model';

export class UserReaction {
  readonly id: number;

  readonly userId: number;
  
  readonly user: User;

  readonly recordId: number;
  
  readonly record: Record;

  /**
   * Special character which can be represented as emoji
   */
  readonly type: string;

  readonly createdAt: string;
  readonly updatedAt: string;
}
