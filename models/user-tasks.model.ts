import { Record } from './records.model';
import { User } from './user.model';

export const UserTaskStatus = {
  inProgress: 'inProgress',
  feedback: 'feedback',
  passed: 'passed',
} as const;

/**
 * Может относиться как к записи (задаче), так и к пользователю
 * при создании должен быть указан либо пользователь либо запись
 * Здесь находятся пользовательские задачи - домашние задания  + кастомные задачи
 * (кастомные задания могут быть в рамках треда - задач, на которые группа разбивает
 * задание, или в рамках собственных, индивидуальных) , которые пользователь начал\закончил выполнять.
 * status in ['inProgress', 'feedback', 'passed'] (в процессе, ожидает фидбека, сдано)
 * trackedTime (in ms) - время, потраченное на задачу (может отсутствовать, тогда будет взято время в промежутке от createdAt до doneAt)
 * userId, при указанном recordId имеет смысл "исполнитель задачи"
 * описание может быть не заполнено
 *
 */
export class UserTask {
  readonly id: number;

  readonly userId: number | null;
  
  readonly user: User | null;

  readonly recordId: number | null;
  
  readonly record: Record | null;

  readonly title: string;

  readonly description: string | null;

  readonly trackedTime: number | null;

  readonly status: keyof typeof UserTaskStatus;

  readonly doneDate: string;

  readonly createdAt: string;
  readonly updatedAt: string;
}
