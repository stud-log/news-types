import { Group } from './group.model';
import { Subject } from './subject.model';

export const TimetableTypes = {
  practice : 'Пр',
  lecture : 'Лек',
  both : 'Лек, Пр',
  lab : 'Лаб'
} as const;

export const TimetableWeekdays = {
  Mon: 'Mon',
  Tue: 'Tue',
  Wed: 'Wed',
  Thu: 'Thu',
  Fri: 'Fri',
  Sat: 'Sat',
  Sun: 'Sun',
} as const;

export const TimetableWeekdaysRU = {
  Mon: 'Понедельник',
  Tue: 'Вторник',
  Wed: 'Среда',
  Thu: 'Четверг',
  Fri: 'Пятница',
  Sat: 'Суббота',
  Sun: 'Воскресенье',
} as const;

export const TimetableWeekparities = {
  even: '0',
  odd: '1',
  both: 'both',
} as const;

/**
 *
 * Расписание это цикличное повторение одних и тех же предметов,
 * поэтому мы указываем только название предмета, четность недели и время начала пары.
 * Так как в теории приложение расчитано на множество групп, то мы так же указываем и ее.
 * Здесь:
 * * start - время начала (конец высчитывается автоматически, + 1.5 ак.ч.)
 * * weekday - день недели
 * * weekparity - четность недели in ['even', 'odd', 'both']
 * * classroom - номер аудитории (может быть пустым - тогда ДО)
 * * link - ссылка на ДО (может быть пустым)
 * * type - лекция\практика\экзамен
 */
export class Timetable {
  readonly id: number;

  readonly groupId: number;

  readonly group: Group;

  readonly subjectId: number;

  readonly subject: Subject;

  readonly type: keyof typeof TimetableTypes;

  readonly weekday: keyof typeof TimetableWeekdays;

  readonly weekparity: keyof typeof TimetableWeekparities;

  readonly startTime: string;
  readonly endTime: string;

  readonly classroom: string | null;

  readonly link: string | null;

  readonly createdAt: string;
  readonly updatedAt: string;
}