
export const HomeworkType = {
  individual: 'individual',
  group: 'group'
} as const;

export class Homework {
  readonly id: number;
    
  readonly title: string;
    
  readonly content: string;

  readonly deadline: string;

  readonly type: keyof typeof HomeworkType;
    
  readonly createdAt: string;
  readonly updatedAt: string;
}

