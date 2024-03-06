
export const CalendarActivityType = {
  custom: 'custom',
  timetable: 'timetable',
} as const;

/**
 * Когда мы создаем новую запись, то записываем ее в эту таблицу с указанием типа активности, к которой эта запись относится.
 * * activityType in ['custom', 'timetable']
 */
export class Calendar {
  readonly id: number;
    
  readonly activityId: number;
    
  readonly activityType: keyof typeof CalendarActivityType;
    
  readonly startDate: string;
  
  readonly endDate: string;
  
}

