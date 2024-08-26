import { biome } from "./biome";
import { diet } from "./diet";
import { earthly } from "./earthly";
import { reprodmode } from "./reprodmode";
import { cover } from "./cover";
export abstract class crawling extends earthly {
    constructor(size : number, diet : diet, reprodmode : reprodmode, biome : biome, cover : cover, is_savage : boolean){
        super(size,diet,reprodmode,biome,cover,is_savage);
    };
}