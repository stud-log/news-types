import { Record } from "./records.model";

/**
 * fileType это расширение
 * fileSize in bytes
 */
export class File {
  readonly id: number;

  readonly recordId: number;
  
  readonly record: Record;

  readonly url: string;

  /**
   * extension
   */
  readonly fileType: string;

  /**
   * in bytes
   */
  readonly fileSize: number | null;
}
