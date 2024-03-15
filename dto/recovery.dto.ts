export class RequestRecoveryDTO {
  readonly email: string;
}

export class ResetPasswordDTO {
  readonly hash: string;
  readonly recoveryId: string;
  readonly userId: string;
  readonly password: string;
  readonly passwordConfirmation: string;
}