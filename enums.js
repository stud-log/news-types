const UserRole = {
  student: 'student',
  headman: 'headman',
  admin: 'admin',
};

const PostType = {
  homework: 'homework',
  news: 'news',
};

const Weekday = {
  Mon: 'Mon',
  Tue: 'Tue',
  Wed: 'Wed',
  Thu: 'Thu',
  Fri: 'Fri',
  Sat: 'Sat',
  Sun: 'Sun',
};

const Weekparity = {
  even: '0',
  odd: '1',
  both: 'both',
};

const UserStatus = {
  inReview: 'inReview',
  approved: 'approved',
  rejected: 'rejected',
};

const WeekdayRu = {
  Mon: 'Понедельник',
  Tue: 'Вторник',
  Wed: 'Среда',
  Thu: 'Четверг',
  Fri: 'Пятница',
  Sat: 'Суббота',
  Sun: 'Воскресенье',
};

const PostLabel = {
  important: 'important',
  event: 'event',
  usefull: 'usefull',
};

module.exports = {
  PostLabel,
  UserStatus,
  WeekdayRu,
  UserRole,
  PostType,
  Weekday,
  Weekparity,
};
