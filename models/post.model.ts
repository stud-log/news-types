import { PostType } from '../interfaces/post.interface';
import { Subject } from './subjects.model';
import { User } from './user.model';

export class Post {
  readonly id: number;

  readonly title: string;

  readonly content: string;

  readonly deadline: string;

  readonly group: string | null;

  readonly postType: keyof typeof PostType;

  readonly usersDone?: User[];

  readonly usersLiked?: User[];

  readonly subject: Subject;

  readonly subjectId: number;

  readonly createdAt: string;
  readonly updatedAt: string;
}
