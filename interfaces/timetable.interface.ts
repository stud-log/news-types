export const Weekday = {
  Mon: 'Mon',
  Tue: 'Tue',
  Wed: 'Wed',
  Thu: 'Thu',
  Fri: 'Fri',
  Sat: 'Sat',
  Sun: 'Sun',
} as const;

export const WeekdayRu = {
  Mon: 'Понедельник',
  Tue: 'Вторник',
  Wed: 'Среда',
  Thu: 'Четверг',
  Fri: 'Пятница',
  Sat: 'Суббота',
  Sun: 'Воскресенье',
} as const;

export const Weekparity = {
  even: '0',
  odd: '1',
  both: 'both',
} as const;

export interface ITimetable {
  id: number;

  title: string;

  link?: string;

  weekday: keyof typeof Weekday;

  weekparity: keyof typeof Weekparity;

  start: string;

  classroom?: string;
}
