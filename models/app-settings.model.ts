export const AppSettingsKeys = {
  firstWeekParity: 'weekparity',
} as const;

export class AppSettings {
    readonly id: number;

    readonly key: keyof typeof AppSettingsKeys;

    readonly value: any;

    readonly description: string;

    readonly isActive: boolean;
}
