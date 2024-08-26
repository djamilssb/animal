import { biome } from "./biome";
import { diet } from "./diet";
import { marine } from "./marine";
import { reprodmode } from "./reprodmode";
import { cover } from "./cover";
export abstract class fish extends marine {
    protected is_savage : boolean;


    constructor(diet:diet,biome:biome,size:number,min_depth:number,max_depth:number,is_savage:boolean){
        super(size,diet,reprodmode.OVIPARE,biome,true,min_depth,max_depth,cover.SCALES);
        this.is_savage = is_savage;
    };
}