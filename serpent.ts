import { biome } from "./biome";
import { crawling } from "./crawling";
import { diet } from "./diet";
import { reprodmode } from "./reprodmode";
import { cover } from "./cover";
export class serpent extends crawling {
    constructor(){
        
        super(40,diet.OMNIVOUROUS,reprodmode.VIVIPARE,biome.JUNGLE,cover.SCALES,true);
    };
    protected override cry() : void {
        console.log("SSSSSSSSSS")
    }
}