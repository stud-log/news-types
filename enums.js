const TimetableTypes = {
  practice : 'Пр',
  lecture : 'Лек',
  both : 'Лек, Пр',
  lab : 'Лаб'
};

const TimetableWeekdays = {
  Mon: 'Mon',
  Tue: 'Tue',
  Wed: 'Wed',
  Thu: 'Thu',
  Fri: 'Fri',
  Sat: 'Sat',
  Sun: 'Sun',
};

const TimetableWeekdaysRU = {
  Mon: 'Понедельник',
  Tue: 'Вторник',
  Wed: 'Среда',
  Thu: 'Четверг',
  Fri: 'Пятница',
  Sat: 'Суббота',
  Sun: 'Воскресенье',
};

const TimetableWeekparities = {
  even: '0',
  odd: '1',
  both: 'both',
};

const CalendarActivityType = {
  custom: 'custom',
  timetable: 'timetable',
};

const HomeworkType = {
  individual: 'individual',
  group: 'group'
};

const LogType = {
  entrance: 'entrance',
  comment: 'comment',
  edit: 'edit',
  create: 'create',
  service: 'service',
};

const UserStatus = {
  inReview: 'inReview',
  approved: 'approved',
  rejected: 'rejected',
};

const UserTaskStatus = {
  inProgress: 'inProgress',
  feedback: 'feedback',
  passed: 'passed',
};

// eslint-disable-next-line no-undef
module.exports = {
  CalendarActivityType,
  UserTaskStatus,
  UserStatus,
  LogType,
  HomeworkType,
  TimetableWeekparities,
  TimetableWeekdaysRU,
  TimetableTypes,
  TimetableWeekdays
};
