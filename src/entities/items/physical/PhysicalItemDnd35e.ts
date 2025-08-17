import { ActorDnd35e } from "../../actors/baseActor/ActorDnd35e";
import { ItemDnd35e } from "../baseItem/ItemDnd35e";
import { PhysicalItemLabels, PhysicalSystemData } from "./system";

const getLabel = (flag: boolean) => flag
    ? game.i18n.localize("D35E.Yes")
    : game.i18n.localize("D35E.No");

abstract class PhysicalItemDnd35e<TParent extends ActorDnd35e | null = ActorDnd35e | null> extends ItemDnd35e<TParent> {


    get weight(): number {
        return this.system.weight;
    }

    // when and where are we calling this?
    override prepareBaseData(): void {
        super.prepareBaseData();

        // Ensure the system data is initialized
        this.system.weight ??= 0;
        this.system.unidentifiedInfo ??= undefined;
        this.system.isIdentifiable ??= false;
        this.system.isIdentified ??= false;
        this.system.hitPoints ??= { value: 10, max: 10 };
        this.system.hardness ??= 0;
        this.system.isCarried ??= false;
        this.system.labels ??= {} as PhysicalItemLabels;


        // Initialize labels
        this.system.labels["carried"] = getLabel(this.system.isCarried);
        this.system.labels["identified"] = getLabel(this.system.isIdentified);
    }
}

interface PhysicalItemDnd35e<TParent extends ActorDnd35e | null = ActorDnd35e | null> extends ItemDnd35e<TParent> {
    
    system: PhysicalSystemData;
}

export { PhysicalItemDnd35e };
