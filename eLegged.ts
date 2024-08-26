import { biome } from "./biome";
import { diet } from "./diet";
import { earthly } from "./earthly";
import { reprodmode } from "./reprodmode";
export abstract class eLegged extends earthly {
    private legs : number;
    
    constructor(size : number, diet : diet, reprodmode : reprodmode, biome : biome, cover : number, is_savage : boolean, legs:number){
        super(size,diet,reprodmode,biome, cover,is_savage);
        this.legs=legs;
    };
}