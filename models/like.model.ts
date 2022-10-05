import { PostType } from '../interfaces';

export class Like {
  readonly id: number;

  readonly userId: number;

  readonly postId: number;

  readonly postType: keyof typeof PostType;

  readonly createdAt: string;
  readonly updatedAt: string;
}
