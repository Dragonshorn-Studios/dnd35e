import { isAttackAction } from "../../../constants/attacks/actionTypes";
import { createTag } from "../../../helpers/stringHelpers";

export class Dnd35eItem extends Item<"item"> {
  extensionMap: Map<string, string>;

  constructor(...args: ConstructorParameters<typeof Item>) {
    super(...args);

    this.extensionMap = new Map();
  }
};