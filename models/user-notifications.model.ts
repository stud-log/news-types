import { Record } from './records.model';
import { User } from './user.model';

/**
 * Уведомление может иметь связь с записью. Например, что на комментарий пользователя ответили и т.п.
 * authorId по умолчанию принадлежит аккаунту системы
 */
export class UserNotification {
  readonly id: number;

  readonly userId: number;

  readonly user: User;

  readonly recordId: number | null;

  readonly record: Record | null;

  readonly authorId: number;

  readonly author: User;

  readonly title: string;

  readonly content: string | null;

  readonly isSeen: boolean;

  readonly createdAt: string;
  readonly updatedAt: string;
}
