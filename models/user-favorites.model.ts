import { Record } from './records.model';
import { User } from './user.model';

export class UserFavorite {
  readonly id: number;

  readonly userId: number;
  
  readonly user: User;

  readonly recordId: number;
  
  readonly record: Record;

  readonly createdAt: string;
  readonly updatedAt: string;
}
