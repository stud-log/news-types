export class RoleCreationDTO {
  readonly title: string;
  readonly permissions: {
    canEdit: boolean;
    canInvite: boolean;
  };
    
}