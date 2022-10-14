import { UserRole } from '../interfaces';

export class RegistrationDto {
  readonly group: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly role: keyof typeof UserRole;
  readonly password: string;
  readonly hash: string;
}

export class AuthDto {
  readonly password: string;
  readonly login: string; // email or tel
}
