import { isAttackAction } from "../../../constants/attacks/actionTypes";
import { createTag } from "../../../helpers/stringHelpers";

export class Dnd35eItem<SubType extends Item.SubType = Item.SubType> extends Item<SubType> {
  extensionMap: Map<string, string>;

  constructor(...args: Item.ConstructorArgs) {
    super(...args);

    this.extensionMap = new Map();
  }
};