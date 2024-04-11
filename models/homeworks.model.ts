import { Group } from "./group.model";
import { Record } from "./records.model";
import { Subject } from "./subject.model";
import { User } from "./user.model";

export const HomeworkType = {
  individual: 'individual',
  group: 'group'
} as const;

export class Homework {
  readonly id: number;

  recordId: number | null;

  record: Record | null;

  subjectId: number;

  subject: Subject;
 
  groupId: number;
  
  group: Group;
  
  authorId: number | null;

  author: User | null;
    
  readonly title: string;
    
  readonly content: string;

  readonly deadline: string;

  readonly type: keyof typeof HomeworkType;
    
  readonly createdAt: string;
  readonly updatedAt: string;
}

