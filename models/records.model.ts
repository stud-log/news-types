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

export class Record {
  readonly id: number;

  readonly recordTable: string;

  readonly recordId: number;

  /**
   * Needed for easy identifying group the records relates to
   */
  groupId: number;

  group: Group;

  news?: News;

  homework?: Homework;

  userTask: UserTask;
  
  calendar?: Calendar;

  team?: Team;

  comments: UserComment[];

  reactions: UserReaction[];

  favorites: UserFavorite[];
  
  files: AppFiles[];
  
  userTasks: UserTask[];

  views: UserView[];
}
