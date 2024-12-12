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
  readGuide: 'readGuide',
};

const UserStatus = {
  inReview: 'inReview',
  approved: 'approved',
  rejected: 'rejected',
  deleted: 'deleted',
};

const UserTaskStatus = {
  inProgress: 'inProgress',
  feedback: 'feedback',
  passed: 'passed',
};

const AssignmentPriority = {
  1: 'Высокий приоритет',
  2: 'Обычный приоритет',
  3: 'Низкий приоритет',
};

// eslint-disable-next-line no-undef
module.exports = {
  CalendarActivityType,
  AssignmentPriority,
  UserTaskStatus,
  UserStatus,
  LogType,
  HomeworkType,
  TimetableWeekparities,
  TimetableWeekdaysRU,
  TimetableTypes,
  TimetableWeekdays
};
