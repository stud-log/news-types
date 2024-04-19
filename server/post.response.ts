import { Timetable, TimetableTypes, TimetableWeekdays, TimetableWeekparities } from '../models/timetable.model';

import { Record } from '../models/records.model';
import { UserReaction } from '../models/user-reactions.model';
import { UserTask } from '../models/user-tasks.model';

/**
 * Response is an array of this type
 */
export class GetAllEntities extends Record{
  count: number;
  rows: GetEntity[];
}

/**
 * Response is of this type
 */
export class GetEntity extends Record{
  meReacted: UserReaction[];

  meWorked: UserTask[];

  meFavorited: boolean;
}
