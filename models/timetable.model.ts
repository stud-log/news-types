import { Weekday, Weekparity } from '../interfaces/timetable.interface';

export class Timetable {
  readonly id: number;

  readonly title: string;

  readonly link: string | null;

  readonly weekday: keyof typeof Weekday;

  readonly weekparity: keyof typeof Weekparity;

  readonly start: string;

  readonly classroom: string | null;

  readonly createdAt: string;
  readonly updatedAt: string;
}
