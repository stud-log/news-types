export const PostType = {
  homework: 'homework',
  news: 'news',
} as const;

export interface IPost {
  id?: number;

  title: string;

  content: string;

  deadline: string;

  group?: string;

  postType: keyof typeof PostType;

  subjectId: number;
}
