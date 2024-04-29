import { Record } from "./records.model";

/**
 * fileType это расширение
 * fileSize in bytes
 */
export class AppFiles {
  readonly id: number;

  readonly recordId: number;
  
  readonly record: Record;

  readonly url: string;

  readonly fileName: string;

  /**
   * in bytes
   */
  readonly fileSize: number | null;
}
