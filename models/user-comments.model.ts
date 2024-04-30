import { Record } from './records.model';
import { User } from './user.model';

/**
 * Комментарии пользователей
 * * title - опциональное поле, для комментариев официального типа
 * * isNote - если комментарий является заметкой для собственной задачи
 */
export class UserComment {
  readonly id: number;

  readonly userId: number;
  
  readonly user: User;

  readonly myRecordId: number;

  readonly recordId: number;
  
  readonly record: Record;

  readonly myRecord: Record;

  readonly parentId: number | null;

  readonly parent: UserComment | null;

  readonly children: UserComment[];

  readonly title: string | null;

  readonly content: string;

  readonly isNote: boolean;

  readonly createdAt: string;
  readonly updatedAt: string;
}
