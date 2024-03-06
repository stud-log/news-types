
/**
* Используется для хранения и проверки ссылок восстановления пароля, а так же приглашений в группу
*/
export class TemporaryLink {
  readonly id: number;

  readonly hash: string;
  
  readonly group: string;
  
  readonly expires: string;

  readonly createdAt: string;
  readonly updatedAt: string;
}
