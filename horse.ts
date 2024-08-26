import { biome } from "./biome";
import { diet } from "./diet";
import { eLegged } from "./eLegged";
import { reprodmode } from "./reprodmode";
import { cover } from "./cover";
export class horse extends eLegged {
    constructor(){
        
        super(200,diet.HEBRIVOROUS,reprodmode.OVIPARE,biome.PLAIN,cover.FURR,false,4);
    };
    protected override cry() : void {
        console.log("HEHEHEHEHEHE")
    }
}