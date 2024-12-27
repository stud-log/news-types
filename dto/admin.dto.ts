export type EXPECTED_EXCEL_HEADERS =
  "Номер группы" |
  "Название предмета" |
  "Преподаватель" |
  "Тип занятия" |
  "День недели" |
  "Четность недели" |
  "Временной промежуток" |
  "Аудитория";

export class SendExcelScheduleOptionsDTO {
    options: {
        columns: {
            myColumn: EXPECTED_EXCEL_HEADERS;
            theirColumn: {name: string; letter: string};
        }[];
        dataRowsStartIndex: number;
    }
}