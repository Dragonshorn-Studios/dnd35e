import { isAttackAction } from "../../../constants/attacks/actionsTypes";
import { createTag } from "../../../helpers/stringHelpers";

export class Dnd35eItem extends Item {
  extensionMap: Map<string, string>;

  constructor(...args: ConstructorParameters<typeof Item>) {
    super(...args);

    this.extensionMap = new Map();
  }

  get tag(): string {
    if (this.name) return createTag(this.name);
    return "tag";
  }
  
  get hasAttack() {
    return isAttackAction(foundry.utils.getProperty(this.system, "actionType"));
  }
};