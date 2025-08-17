import { isAttackAction } from "../../../constants/attacks/actionTypes";
import { createTag } from "../../../helpers/stringHelpers";
import { ActorDnd35e } from "../../actors/baseActor/ActorDnd35e";
import { ItemFlagsDnd35e, ItemSystemData } from "./data/system";

// export class Dnd35eItem<SubType extends Item.SubType = Item.SubType> extends Item<SubType> {
//   extensionMap: Map<string, string>;

//   constructor(...args: Item.ConstructorArgs) {
//     super(...args);

//     this.extensionMap = new Map();
//   }
// };
abstract class ItemDnd35e<TParent extends ActorDnd35e | null = ActorDnd35e | null> extends Item<TParent> {
    override prepareBaseData(): void {
        super.prepareBaseData();

        this.system = this.system || {
            description: '',
        } as ItemSystemData;
    }
}

interface ItemDnd35e<TParent extends ActorDnd35e | null = ActorDnd35e | null> extends Item<TParent> {
    constructor: typeof ItemDnd35e;
    flags: ItemFlagsDnd35e;
    // readonly _source: ItemSource;
    system: ItemSystemData;
}

export { ItemDnd35e };
