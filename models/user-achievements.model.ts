import { Achievement } from './achievements.model';
import { User } from './user.model';

export class UserAchievement {
  readonly id: number;

  readonly userId: number;
  
  readonly user: User;

  readonly achievementId: number;
  
  readonly achievement: Achievement;

  readonly createdAt: string;
  readonly updatedAt: string;
}
