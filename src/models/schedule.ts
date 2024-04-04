export type Schedule = {
    Id: string;
    Start: string;
    End: string;
    Dayofweek: Array<Boolean>;
    Repeat: Boolean;
    Title: string;
    StartRecur: string;
    EndRecur: string;
}