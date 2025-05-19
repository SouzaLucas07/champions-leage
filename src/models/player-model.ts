export interface PlayerModel {
    id: number;
    name: string;
    team: string;
    nationality: string;
    position: string;
    ststistics: {
        Overall: number,
        Pace: number,
        Shooting: number,
        Passing: number,
        Dribbling: number,
        Defending: number,
        Physical: number
    }
}