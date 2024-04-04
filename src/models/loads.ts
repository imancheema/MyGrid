export type Load = {
    Id: string;
    Name: string;
    Type?: string;
    Powerusage?: number;
    batteryId: string;
    battery: object;
}