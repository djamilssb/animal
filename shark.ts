import { biome } from "./biome";
import { diet } from "./diet";
import { fish } from "./fish";
import { cover } from "./cover";
export class shark extends fish {
    constructor(){
        
        super(diet.CARNIVOROUS,biome.OCEAN,1500,210,4000,true);
    };
    protected override cry() : void {
        console.log("BUAHHHHH")
    }
};