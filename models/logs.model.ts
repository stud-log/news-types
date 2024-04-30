
export const LogType = {
  entrance: 'entrance',
  comment: 'comment',
  edit: 'edit',
  create: 'create',
  service: 'service',
  readGuide: 'readGuide',
} as const;

/**
* Используется для логов и в качестве фиксации событий для достижений
*/
export class Log {
  readonly id: number;

  readonly recordId: number | null;
    
  readonly userId: number | null;

  readonly content: string | null;

  readonly isPublic: boolean;

  readonly type: keyof typeof LogType;
  
  readonly createdAt: string;
  readonly updatedAt: string;
}
