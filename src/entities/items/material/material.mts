import { ActorDnd35e } from "@actors/baseActor/ActorDnd35e.mjs";
import { ItemDnd35e } from "@items/baseItem/index.mjs";
import { MaterialSystemData } from "./data/system.mjs";


export class MaterialDnd35e<TActor extends ActorDnd35e | null = ActorDnd35e | null> extends ItemDnd35e<TActor> {
  declare system: MaterialSystemData;
}
