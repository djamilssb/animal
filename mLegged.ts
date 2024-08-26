import { biome } from "./biome";
import { diet } from "./diet";
import { marine } from "./marine";
import { reprodmode } from "./reprodmode";
import { cover } from "./cover";
export abstract class mLegged extends marine {
    private legs : number;
    
    
    constructor(size : number, diet : diet, reprodmode : reprodmode, biome : biome, legs : number,breath_under_water : boolean , min_depth : number, max_depth : number, cover : cover){
        super(size,diet,reprodmode,biome,breath_under_water,min_depth,max_depth,cover);
        this.legs = legs;
    }
}
