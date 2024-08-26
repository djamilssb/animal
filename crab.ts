import { mLegged } from "./mLegged";
import { diet } from "./diet";
import { reprodmode } from "./reprodmode";
import { biome } from "./biome";
import { cover } from "./cover";
export class crab extends mLegged {
    constructor(){
        super(20,diet.OMNIVOUROUS,reprodmode.OVIPARE,biome.RIVER,10,true,0,10,cover.SCALES);
    };
    protected override cry() : void {
        console.log("KRKRKRKRKR")
    };
};