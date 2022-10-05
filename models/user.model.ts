import { UserRole } from '../interfaces/user.interface';
import { Post } from './post.model';

export class User {
  readonly id: number;

  readonly name: string;

  readonly avatarImage: string;

  readonly role: keyof typeof UserRole;

  readonly postsDone?: Post[];

  readonly postsLiked?: Post[];

  readonly createdAt: string;
  readonly updatedAt: string;
}
