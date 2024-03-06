import { Calendar } from './calendar.model';
import { User } from './user.model';

export class UserAttendance {
  readonly id: number;

  readonly userId: number;
  
  readonly user: User;

  readonly calendarId: number;
  
  readonly calendar: Calendar;

  readonly createdAt: string;
  readonly updatedAt: string;
}
