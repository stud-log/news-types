import { User } from './../models/user.model';

export class UserAfterLoginOrRegistrationResponse {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly user: User;
}