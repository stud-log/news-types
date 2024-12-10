import { Assignment } from './assignments.model';
import { AppFiles } from "./files.model";
import { Calendar } from "./calendar.model";
import { Group } from "./group.model";
import { Homework } from "./homeworks.model";
import { News } from "./news.model";
import { Team } from "./teams.model";
import { UserComment } from "./user-comments.model";
import { UserFavorite } from "./user-favorites.model";
import { UserReaction } from "./user-reactions.model";
import { UserTask } from "./user-tasks.model";
import { UserView } from "./user-views.model";
import { User } from "./user.model";

export class Record {
  readonly id: number;

  readonly recordTable: string;

  readonly recordId: number;

  /**
   * Needed for easy identifying group the records relates to
   */
  groupId: number | null;

  reachableForGroups: number[] | null;

  group: Group;

  news?: News;

  homework?: Homework;

  assignment?: Assignment;

  userTask: UserTask;
  
  calendar?: Calendar;

  team?: Team;

  comments: UserComment[];

  reactions: UserReaction[];

  favorites: UserFavorite[];
  
  files: AppFiles[];
  
  userTasks: UserTask[];

  views: UserView[];

  /**
   * Нужно для того, чтобы при создании записи, с которой могут взаимодействовать несколько групп,
   * можно было разделить копии от оригинальной сущности.
   */
  authorId: number | null;

  author: User;

  originalId: number | null;

  original: Record;

  copies: Record[];

  isCopy: boolean | null;

  isOriginal: boolean | null;

  relatedGroupIds: number[] | null;

  relatedUserIds: number[] | null;

  relatedGroups: Group[];

  relatedUsers: User[];

  visibility: boolean | null;
}
