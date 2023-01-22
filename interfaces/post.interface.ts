export const PostType = {
  homework: 'homework',
  news: 'news',
} as const;

export const PostLabel = {
  important: 'important',
  event: 'event',
  usefull: 'usefull',
} as const;

export interface IPost {
  id?: number;

  title: string;

  content: string;

  deadline: string;

  group?: string;

  postType: keyof typeof PostType;

  postLabel?: keyof typeof PostLabel;

  subjectId: number;
}
