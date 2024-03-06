import { UserComment } from './user-comments.model';

export class Team {
  readonly id: number;

  readonly pinnedCommentId: number | null;

  readonly pinnedComment: UserComment | null;

  readonly title: string;
    
  readonly description: string | null;

  readonly createdAt: string;
}

