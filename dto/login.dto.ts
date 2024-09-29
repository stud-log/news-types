export class LoginDTO {
  readonly email: string;
  readonly password: string;
  readonly role?: 'admin' | 'student' | 'teacher';
}