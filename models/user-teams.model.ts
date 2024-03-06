import { Record } from './records.model';
import { User } from './user.model';

/**
 * По сути список принадлежности пользователя к группе (которая находит отражение в таблице Record)
 */
export class UserTeam {
  readonly id: number;

  readonly userId: number;
  
  readonly user: User;

  readonly recordId: number;
  
  readonly record: Record;

  readonly isOwner: boolean;

  readonly createdAt: string;
  readonly updatedAt: string;
}
