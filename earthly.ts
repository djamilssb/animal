import { Animal } from "./animal";
import { biome } from "./biome";
import { cover } from "./cover";
import { diet } from "./diet";
import { reprodmode } from "./reprodmode";

export abstract class earthly extends Animal {
    protected is_savage : boolean ;
    constructor(size : number,diet : diet,reprodmode : reprodmode, biome : biome, cover : cover, is_savage : boolean){
        super(size,diet,reprodmode,biome,cover);
        this.is_savage = is_savage;
    };
};