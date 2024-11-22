import { Group } from "./group.model";
import { Record } from "./records.model";
import { User } from "./user.model";

export class News {
  readonly id: number;
    
  readonly title: string;
    
  readonly content: string;

  readonly label: string;

  groupId: number | null;

  group: Group;

  authorId: number;
  
  author: User;

  recordId: number | null;
  
  record: Record | null;

  coverImage: string | null;

  isOriginal: boolean | null;

  relatedGroupIds: number[] | null;
    
  readonly createdAt: string;
  readonly updatedAt: string;
}

