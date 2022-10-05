import { Post } from './post.model';

export class Subject {
  readonly id: number;

  readonly title: string;

  readonly fullName: string | null;

  readonly posts: Post[];

  readonly createdAt: string;
  readonly updatedAt: string;
}
