import { Timetable, TimetableTypes, TimetableWeekdays, TimetableWeekparities } from './../models/timetable.model';

import { CalendarActivityType } from '../models/calendar.model';
import { CustomActivity } from './../models/custom-activities.model';
import { Group } from '../models/group.model';
/**
 * Response is an array of this type
 */
export class GetSchedule {
  id: number;
  groupId: number;
  recordTable: string;
  recordId: number;
  createdAt: string;
  updatedAt: string;
  calendar: {
    id: number;
    recordId: number;
    groupId: number;
    activityId: number;
    activityType: keyof typeof CalendarActivityType;
    startDate: string;
    endDate: string;
    timetable: Timetable[];
    customActivity: CustomActivity[];
    group: Group;
  };
}

/**
 * Response of this type
 */
export class GetScheduleElement {
  id: number;
  groupId: number;
  recordTable: string;
  recordId: number;
  createdAt: string;
  updatedAt: string;
  calendar: {
    id: number;
    recordId: number;
    groupId: number;
    activityId: number;
    activityType: keyof typeof CalendarActivityType;
    startDate: string;
    endDate: string;
    timetable: Timetable[];
    customActivity: CustomActivity[];
    group: Group;
  };
}


export interface ErrorCreatingTimetableFromExcel {
  /** key - номер строки, value - ошибка*/
  [key: number]: string 
}