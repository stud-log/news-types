import { UserRole } from '../interfaces/user.interface';
import { Post } from './post.model';

export class User {
  readonly id: number;

  readonly firstName: string;

  readonly lastName: string;

  readonly email: string;

  readonly password?: string;

  readonly phone: string;

  readonly group: string;

  readonly avatar: string;

  readonly role: keyof typeof UserRole;

  readonly postsDone?: Post[];

  readonly postsLiked?: Post[];

  readonly createdAt: string;
  readonly updatedAt: string;
}
