import { User } from "./user.model";

export class Subject {
  readonly id: number;

  readonly title: string;
  /**
   * Здесь имя препода, которое спарсилось из таблички
   */
  readonly shortTitle: string | null;

  readonly teacherName: string | null;

  readonly userId: number | null;

  readonly teacher: User | null;

}
