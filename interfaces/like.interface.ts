import { PostType } from './post.interface';

export interface ILike {
  id?: number;

  userId: number;

  postId: number;

  postType: keyof typeof PostType;
}
