export class AreaCctv {
    chinaTotal: {
        confirm: number,
        suspect: number,
        dead: number,
        heal: number
    };
    chinaAdd: {
        confirm: number,
        suspect: number,
        dead: number,
        heal: number
    };
    lastUpdateTime: Date;
    areaTree:AreaCctvItem[];
    chinaDayList: ChinaDay[];
    isShowAdd: boolean
}


export class AreaCctvItem{
    name: string;
    today: {
        confirm: number,
        suspect: number,
        dead: number,
        heal: number,
        isUpdated: boolean
    };
    total: {
        confirm: number,
        suspect: number,
        dead: number,
        heal: number
    };
    children:AreaCctvItem[]
}

export class ChinaDay{
    confirm: number;
    suspect: number;
    dead: number;
    heal: number;
    deadRate:number;
    healRate: number;
    date: number
}