import { User } from './user.model';

export class RefreshToken {
  readonly id: number;

  readonly userId: number;

  readonly user: User;

  readonly refreshToken: string;
}
