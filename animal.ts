import { reprodmode } from "./reprodmode";
import { biome } from "./biome";
import { diet } from "./diet";
import { cover } from "./cover";

export abstract class Animal {
    protected reprodmode : reprodmode ;
    protected biome : biome;
    protected diet : diet;
    protected size : number;
    protected is_hungry : boolean;
    protected is_sleepy : boolean;
    protected cover : cover;

    constructor(size : number, diet : diet, reprod_mode : reprodmode, biome : biome, cover : cover) {
        this.biome = biome;
        this.size = size;
        this.reprodmode = reprod_mode;
        this.diet = diet;
        this.cover = cover
    };
    
    protected eat() {
    };

    protected breath() {

    };

    protected abstract cry() : void;

    protected sleep() {

    }; 
    
};