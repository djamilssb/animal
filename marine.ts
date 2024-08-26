import { Animal } from "./animal";
import { biome } from "./biome";
import { diet } from "./diet";
import { reprodmode } from "./reprodmode";
import { cover } from "./cover";
export abstract class marine extends Animal {
    protected breath_under_water : boolean ;
    protected min_depth : number;
    protected max_depth : number;
    
    
    constructor(size : number, diet : diet, reprodmode : reprodmode, biome : biome, breath_under_water : boolean , min_depth : number, max_depth : number,cover : cover){
        super(size,diet,reprodmode,biome,cover);
        this.breath_under_water = breath_under_water;
        this.min_depth = min_depth;
        this.max_depth = max_depth;
    };
};