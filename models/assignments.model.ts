
import { Record } from './records.model';
import { User } from './user.model';

export const AssignmentPriority = {
    1: 'Высокий приоритет',
    2: 'Обычный приоритет',
    3: 'Низкий приоритет',
} as const;

/**
 * Задачи, порученные конкретным пользователям ИЛИ (строго "или") всей группе.
 * За счет того, что посл создания поручения будет создана запись в Records,
 * пользователи могут самостоятельно контролировать статус выполнения поручения, независимо
 * от других пользователей или групп, которым задача поручена.
 *
 * Таким образом, в рамках одной сущности Record пользователи могут обсудить условия выполнения задачи,
 * при этом не видя личных заметок по ней от других исполнителей.
 */


export class Assignment  {
    readonly id: number;

    readonly recordId: number;
  
    readonly record: Record;

    readonly authorId: number;
  
    readonly author: User;
    
    readonly title: string;
    
    readonly content: string;

    readonly startDate: string;

    readonly endDate: string;

    readonly priority: keyof typeof AssignmentPriority | null;

    readonly isOriginal: boolean;

    readonly relatedGroupIds: Array<number> | null;

    readonly relatedUserIds: Array<number> | null;

    readonly createdAt: string;
    readonly updatedAt: string;
}

