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

module.exports = {
  UserStatus,
  UserRole,
  PostType,
  Weekday,
  Weekparity,
};
